import Header from '../components/ui/Heading.tsx';
import Button from '../components/ui/Button.tsx';
import imageS from '../assets/Images/imageS.png'

const Card = () => {
  return (
    <div id="hero" className="flex flex-col md:flex-row items-center justify-between gap-8 p-4 w-[94%] mx-auto">
      {/* Left: Text content */}
      <div className="flex-1">
        <Header
            level="h1"
        >
          Step Into Comfort & Style
        </Header>
        <br />
        <Header
            level="h4"
        >
          Discover our new collection of premium shoes designed for both comfort and style. Crafted with the finest materials and attention to detail.
        </Header>
        <br />
        <Button
          className="cursor-pointer"
        >
          Shop Collection
        </Button>
        <Button
          variant="link"
          className="cursor-pointer ml-4"
        >
          Learn More
        </Button>
      </div>

      {/* Right: Image */}
      <div className="flex justify-end">
        <img src={imageS} alt="Shoe Collection" className="w-112 md:w-112 h-auto object-contain ml-auto" />
      </div>
    </div>
  );
};

export default Card;