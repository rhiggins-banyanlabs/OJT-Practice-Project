import Header from '../components/ui/Heading.tsx';
import Paragraph from '../components/ui/Paragraph.tsx';
import Button from '../components/ui/Button.tsx';
import imageS from '../assets/Images/imageS.png'

const Card = () => {
  return (
    <div className="flex items-center justify-between gap-8 p-4">
      {/* Left: Text content */}
      <div className="flex-1">
        <Header
            level="h1"
        >
          Step Into Comfort & Style
        </Header>
        <br />
        <Paragraph
            variant="body"
        >
          Discover our new collection of premium shoes designed for both comfort and style. Crafted with the finest materials and attention to detail.
        </Paragraph>
        <br />
        <Button>
          Shop Collection
        </Button>
        <Button
          variant="link"
          className="cursor:pointer ml-4"
        >
          Learn More
        </Button>
      </div>

      {/* Right: Image */}
      <div className="flex-1">
        <img src={imageS} alt="Shoe Collection" className="w-full h-auto object-contain" />
      </div>
    </div>
  );
};

export default Card;