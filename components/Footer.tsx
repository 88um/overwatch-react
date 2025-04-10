
interface FooterProps {

}

const Footer: React.FC<FooterProps> = ({}) => {
  return (
    <div className="flex items-center justify-center w-full bg-black p-8">
        <p className="text-white">
            Copyright &copy; 2025, Overwatch Startegy Hub 
        </p>
    </div>
  );
};

export default Footer;