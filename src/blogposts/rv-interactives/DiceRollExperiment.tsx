'use client'

import { useState, useEffect, useRef } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Dice1, Dice2, Dice3, Dice4, Dice5, Dice6, Info } from 'lucide-react'

const DiceFaces = [Dice1, Dice2, Dice3, Dice4, Dice5, Dice6]

const presetFunctions = {
  identity: { name: "Identity", func: { 1: 1, 2: 2, 3: 3, 4: 4, 5: 5, 6: 6 } },
  binary: { name: "Binary (Even/Odd)", func: { 1: 0, 2: 1, 3: 0, 4: 1, 5: 0, 6: 1 } },
  squared: { name: "Squared", func: { 1: 1, 2: 4, 3: 9, 4: 16, 5: 25, 6: 36 } },
}

export default function DiceRollExperiment() {
  const [rolledValue, setRolledValue] = useState<number | null>(null)
  const [customFunction, setCustomFunction] = useState<Record<number, number>>(presetFunctions.identity.func)
  const [showCustom, setShowCustom] = useState(false)
  const [currentStep, setCurrentStep] = useState(0)
  const [showTutorial, setShowTutorial] = useState(false)
  const latexRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.9/MathJax.js?config=TeX-MML-AM_CHTML'
    script.async = true
    document.body.appendChild(script)

    script.onload = () => {
      if (typeof window !== 'undefined' && (window as any).MathJax) {
        (window as any).MathJax.Hub.Config({
          tex2jax: {
            inlineMath: [['$', '$'], ['\\(', '\$$']],
            processEscapes: true
          }
        })
      }
    }

    return () => {
      document.body.removeChild(script)
    }
  }, [])

  useEffect(() => {
    if (latexRef.current && typeof window !== 'undefined' && (window as any).MathJax) {
      (window as any).MathJax.Hub.Queue(['Typeset', (window as any).MathJax.Hub, latexRef.current])
    }
  }, [rolledValue, customFunction])

  const rollDice = () => {
    const newValue = Math.floor(Math.random() * 6) + 1
    setRolledValue(newValue)
  }

  const handleCustomFunctionChange = (face: number, value: string) => {
    setCustomFunction(prev => ({ ...prev, [face]: parseInt(value) || 0 }))
  }

  const handlePresetChange = (preset: string) => {
    setCustomFunction(presetFunctions[preset].func)
    setShowCustom(false)
  }

  const tutorialSteps = [
    { target: 'sample-space', content: 'This is the sample space, showing all possible outcomes of rolling a die.' },
    { target: 'random-variable-function', content: 'This section defines how we map each outcome to a value, creating our random variable.' },
    { target: 'range', content: 'The range shows all possible values our random variable can take.' },
    { target: 'roll-button', content: 'Click this button to simulate rolling the die and see how the random variable behaves.' },
  ]

  const nextStep = () => {
    if (currentStep < tutorialSteps.length - 1) {
      setCurrentStep(currentStep + 1)
    } else {
      setShowTutorial(false)
    }
  }

  return (
    <div className="w-full max-w-4xl mx-auto p-4 space-y-4">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Dice Roll Experiment: Visualizing Random Variables</CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-3 gap-4">
          {/* Sample Space */}
          <div className={`space-y-2 sample-space ${showTutorial && currentStep === 0 ? 'ring-2 ring-blue-500 ring-offset-2' : ''}`}>
            <h3 className="text-lg font-semibold flex items-center">
              Sample Space
              <Popover>
                <PopoverTrigger>
                  <Info className="h-4 w-4 ml-2 text-muted-foreground" />
                </PopoverTrigger>
                <PopoverContent>
                  The set of all possible outcomes in the experiment.
                </PopoverContent>
              </Popover>
            </h3>
            <div className="grid grid-cols-2 gap-2">
              {DiceFaces.map((DiceFace, index) => (
                <div key={index} className={`p-2 border rounded ${rolledValue === index + 1 ? 'bg-primary text-primary-foreground' : ''}`}>
                  <DiceFace className="h-12 w-12" />
                </div>
              ))}
            </div>
          </div>

          {/* Random Variable Function */}
          <div className={`space-y-2 random-variable-function ${showTutorial && currentStep === 1 ? 'ring-2 ring-blue-500 ring-offset-2' : ''}`}>
            <h3 className="text-lg font-semibold flex items-center">
              Random Variable Function
              <Popover>
                <PopoverTrigger>
                  <Info className="h-4 w-4 ml-2 text-muted-foreground" />
                </PopoverTrigger>
                <PopoverContent>
                  Maps each outcome to a numerical value.
                </PopoverContent>
              </Popover>
            </h3>
            <Select onValueChange={handlePresetChange}>
              <SelectTrigger>
                <SelectValue placeholder="Select a preset function" />
              </SelectTrigger>
              <SelectContent>
                {Object.entries(presetFunctions).map(([key, { name }]) => (
                  <SelectItem key={key} value={key}>{name}</SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Button onClick={() => setShowCustom(!showCustom)}>
              {showCustom ? "Hide Custom" : "Create Custom Function"}
            </Button>
            {showCustom && (
              <div className="space-y-2">
                {Object.keys(customFunction).map((face) => (
                  <div key={face} className="flex items-center space-x-2">
                    <Label htmlFor={`face-${face}`}>Face {face}:</Label>
                    <Input
                      id={`face-${face}`}
                      type="number"
                      value={customFunction[parseInt(face)]}
                      onChange={(e) => handleCustomFunctionChange(parseInt(face), e.target.value)}
                      className="w-20"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Range of Random Variable */}
          <div className={`space-y-2 range ${showTutorial && currentStep === 2 ? 'ring-2 ring-blue-500 ring-offset-2' : ''}`}>
            <h3 className="text-lg font-semibold flex items-center">
              Range of Random Variable
              <Popover>
                <PopoverTrigger>
                  <Info className="h-4 w-4 ml-2 text-muted-foreground" />
                </PopoverTrigger>
                <PopoverContent>
                  The set of possible values the random variable can take.
                </PopoverContent>
              </Popover>
            </h3>
            <div className="space-y-1">
              {Array.from(new Set(Object.values(customFunction))).sort((a, b) => a - b).map((value) => (
                <div key={value} className={`p-2 border rounded ${rolledValue && customFunction[rolledValue] === value ? 'bg-primary text-primary-foreground' : ''}`}>
                  {value}
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      <Button onClick={rollDice} className={`w-full roll-button ${showTutorial && currentStep === 3 ? 'ring-2 ring-blue-500 ring-offset-2' : ''}`}>Roll Dice</Button>

      {rolledValue && (
        <Card>
          <CardContent className="pt-4">
            <p className="text-center mb-2">
              The outcome was {rolledValue}, so the random variable X takes the value {customFunction[rolledValue]}.
            </p>
            <div className="text-center" ref={latexRef}>
              {'\\(X(\\omega) = ' + customFunction[rolledValue] + '\$$'}
            </div>
          </CardContent>
        </Card>
      )}

      <Button onClick={() => { setShowTutorial(true); setCurrentStep(0); }}>Start Tutorial</Button>

      {showTutorial && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <Card className="max-w-md">
            <CardContent className="p-4">
              <h3 className="text-lg font-bold mb-2">Tutorial</h3>
              <p>{tutorialSteps[currentStep].content}</p>
              <Button onClick={nextStep} className="mt-4">
                {currentStep < tutorialSteps.length - 1 ? 'Next' : 'Finish'}
              </Button>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  )
}