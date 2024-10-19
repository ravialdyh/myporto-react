import React from "react";
import { MathJax, MathJaxContext } from "better-react-mathjax";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import DiceRollExperiment from "./rv-interactives/DiceRollExperiment";

const config = {
  loader: { load: ["[tex]/ams"] },
  tex: {
    packages: { "[+]": ["ams"] },
    inlineMath: [["$", "$"]],
    displayMath: [["$$", "$$"]],
    macros: {
      R: "\\mathbb{R}",
    },
  },
};

const BlogPost1 = () => {
  return (
    <MathJaxContext config={config}>
      <Card className="w-full max-w-4xl mx-auto my-8">
        <CardContent className="p-4 sm:p-6 md:p-8 lg:p-10">
          <div className="space-y-8">
            <header>
              <p className="text-base sm:text-lg text-muted-foreground">
                Explore the fundamental concepts of probability theory and
                statistics through an in-depth look at random variables.
              </p>
            </header>

            <Separator />

            <section className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-semibold">
                Formal Definition of Random Variables
              </h2>
              <p className="text-sm sm:text-base">
                We begin with the formal definition of a random variable:
              </p>
              <p className="text-sm sm:text-base">
                A random variable is a function that assigns to each elementary
                outcome a numerical value.
              </p>
              <Card className="bg-muted p-4">
                <MathJax>{"$$X : \\Omega \\to \\R$$"}</MathJax>
              </Card>
              <p className="text-sm sm:text-base">
                <span className="inline-flex items-center">
                  Here,
                  <MathJax inline className="mx-1">
                    {"$\\Omega$"}
                  </MathJax>
                </span>{" "}
                represents the sample space, which is the set of all possible
                outcomes of an experiment or random process.
              </p>
            </section>

            <Separator />

            <section className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-semibold">
                Example: Dice Rolling Experiment
              </h2>
              <p className="text-sm sm:text-base">
                To illustrate this concept, let's consider a simple experiment
                of rolling a fair six-sided die. Our sample space would be:
              </p>
              <Card className="bg-muted p-4">
                <MathJax>
                  {"$$\\Omega_{\\text{die roll}} = \\{1, 2, 3, 4, 5, 6\\}$$"}
                </MathJax>
              </Card>
              <p className="text-sm sm:text-base">
                Now, let's define a random variable X that represents the
                outcome of the die roll:
              </p>
              <Card className="bg-muted p-4">
                <MathJax>
                  {
                    "$$X(\\omega) = \\omega, \\quad \\text{for } \\omega \\in \\Omega_{\\text{die roll}}$$"
                  }
                </MathJax>
              </Card>
              <p className="text-sm sm:text-base">
                This is an example of an identity function, where the random
                variable X assigns to each outcome its face value.
              </p>
            </section>

            <Separator />

            <section className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-semibold">
                Types of Random Variables
              </h2>
              <p className="text-sm sm:text-base">
                Random variables are typically classified into two main
                categories:
              </p>
              <ul className="list-disc list-inside space-y-2 pl-4 text-sm sm:text-base">
                <li>
                  <strong>Discrete Random Variables</strong>: These take on
                  countable values. Our die rolling example is a discrete random
                  variable.
                </li>
                <li>
                  <strong>Continuous Random Variables</strong>: These can take
                  any value within a range. An example would be the exact time
                  it takes for a chemical reaction to complete.
                </li>
              </ul>
            </section>

            <Separator />

            <section className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-semibold">
                Probability Distributions
              </h2>
              <p className="text-sm sm:text-base">
                Each random variable has an associated probability distribution.
                For our fair die rolling example:
              </p>
              <Card className="bg-muted p-4">
                <MathJax>
                  {
                    "$$P(X = k) = \\frac{1}{6}, \\quad \\text{for } k \\in \\{1, 2, 3, 4, 5, 6\\}$$"
                  }
                </MathJax>
              </Card>
              <p className="text-sm sm:text-base">
                This uniform distribution reflects the equal probability of
                rolling any number on a fair die.
              </p>
            </section>

            <Separator />

            <section className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-semibold">
                Expected Value and Variance
              </h2>
              <p className="text-sm sm:text-base">
                Two important properties of random variables are their expected
                value and variance:
              </p>
              <ul className="list-none space-y-4 text-sm sm:text-base">
                <li className="flex items-center space-x-2">
                  <strong>Expected Value</strong>
                  <MathJax inline>{"$E[X]$"}</MathJax>
                  <span>
                    : The average value we expect to observe over many trials.
                  </span>
                </li>
                <Card className="bg-muted p-4">
                  <MathJax>
                    {
                      "$$E[X] = 1 \\cdot \\frac{1}{6} + 2 \\cdot \\frac{1}{6} + 3 \\cdot \\frac{1}{6} + 4 \\cdot \\frac{1}{6} + 5 \\cdot \\frac{1}{6} + 6 \\cdot \\frac{1}{6} = 3.5$$"
                    }
                  </MathJax>
                </Card>
                <li className="flex items-center space-x-2">
                  <strong>Variance</strong>
                  <MathJax inline>{"$Var(X)$"}</MathJax>
                  <span>
                    : A measure of the spread of the possible values around the
                    expected value.
                  </span>
                </li>
                <Card className="bg-muted p-4">
                  <MathJax>
                    {
                      "$$Var(X) = E[X^2] - (E[X])^2 = \\frac{91}{6} - (\\frac{7}{2})^2 = \\frac{35}{12} \\approx 2.92$$"
                    }
                  </MathJax>
                </Card>
              </ul>
            </section>

            <Separator />

            <section className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-semibold">
                Interactive Dice Roll Experiment
              </h2>
              <p className="text-sm sm:text-base">
                Explore the concept of random variables with this interactive
                dice roll experiment. You can change the function that maps the
                dice roll outcomes to different values, demonstrating how
                various random variables can be defined on the same sample
                space.
              </p>
              <DiceRollExperiment />
            </section>

            <Separator />

            <section className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-semibold">Conclusion</h2>
              <p className="text-sm sm:text-base">
                Understanding random variables is essential for anyone working
                in data science, statistics, or any field that deals with
                uncertainty. While the concept may seem abstract at first, it
                provides a powerful tool for modeling and analyzing real-world
                phenomena. The interactive dice roll experiment above
                demonstrates how we can define different random variables on the
                same sample space, allowing us to model various aspects of an
                experiment or process.
              </p>
            </section>
          </div>
        </CardContent>
      </Card>
    </MathJaxContext>
  );
};

export default BlogPost1;
