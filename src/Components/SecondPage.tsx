import { InfiniteMovingCards } from "../Components/ui/infinite-moving-cards";
import docker from '../../public/docker.svg'
import aws from '../../public/aws.svg'
import mongo from '../../public/mongo.svg'
import nextjs from '../../public/nextjs.svg'
import node from '../../public/nodejs.svg'
import react from '../../public/react.svg'
import typescript from '../../public/typescript.svg'
import tailwind from '../../public/tailwind.svg'
import ethereum from '../../public/ethereum.svg'
import solidity from '../../public/solidity.svg'
import github from '../../public/github.svg' 

const SecondPage = () => {
  return (
    <div className="">
      <div className="text-green-500 text-3xl md:text-5xl text-center pt-10">
        Brains Behind My Builds
      </div>
      <div className="rounded-md flex flex-col antialiased  items-center justify-center relative overflow-hidden">
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
        />
      </div>
    </div>
  );
}

const testimonials = [
  {
    name: "DOCKER",
    image: docker
  },
  {
    name: "AWS",
    image: aws
  },
  {
    name: "GITHUB",
    image: github
  },
  {
    name: "MONGO DB",
    image: mongo
  },
  {
    name: "NEXTJS",
    image: nextjs
  },
  {
    name: "NODEJS",
    image: node
  },
  {
    name: "REACTJS",
    image: react
  },
  {
    name: "TYPESCRIPT",
    image: typescript
  },
  {
    name: "TAILWIND",
    image: tailwind
  },
  {
    name: "ETHEREUM",
    image: ethereum
  },
  {
    name: "SOLIDITY",
    image: solidity
  },
];
export default SecondPage;