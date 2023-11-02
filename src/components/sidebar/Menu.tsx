import { FC } from 'react';
import {
  Code,
  Contact,
  Flame,
  Github,
  Highlighter,
  Home,
  Image as ImageIcon,
  Instagram,
  Layers,
  Linkedin,
  Scissors,

  X,

} from 'lucide-react';
import List from '../ui/List';
import { useContact, useMenu } from '../Provider';
import { Props } from 'next/script';
import ContactMe from '../ContactForm/ContactMe';
import Router from 'next/router';

interface MenuProps {}

const Menu: FC<MenuProps> = ({ }) => {
  const { showMenuVisibility } = useMenu();
  const { setFormVisibility } = useContact();
  const openHeroPage = () => {
    // Add your logic here to open the "Hero" page
    Router.push('/hero'); // Assuming 'hero' is the route for the Hero component page
  };
  return (
    <div
      className="flex relative flex-col h-full p-5 bg-cardPrimary text-primary rounded-lg w-full overflow-y-auto pb-20 md:pb-5"
      onClick={() => showMenuVisibility(false)}
    >
      <div className="block lg:hidden p-5 z-10 text-primary absolute right-0 top-0 cursor-pointer text-2xl">
        <X className={`text-primary`} />
      </div>
      {/* List 1 */}
      <List  effect="slideUp">
        <Home /> Home
      </List>
      <List  effect="slideUp">
        <Flame /> About me
      </List>
      <List effect="slideUp" >
  <Contact onClick={setFormVisibility} /> Contact Me 
</List>
      <List effect="slideUp">
        <Highlighter onClick={setFormVisibility} />  Hire me
      </List>

      {/* List 2 */}
      <div className="mt-5">Socials</div>
      <List
        target="_blank"
        link="https://www.instagram.com/imranali.dev/"
        effect="slideUp"
      >
        <Instagram color="#b5179e" /> Instagram
      </List>
      <List target="_blank" link="https://github.com/Imran13james" effect="slideUp">
        <Github color="#2a9d8f" /> Github
      </List>
      {/* <List
        target="_blank"
        link=""
        effect="slideUp"
      >
        <Youtube color="#e63946" /> Youtube
      </List> */}
      <List
        target="_blank"
        link="https://stackoverflow.com/users/22842200/imran-ali"
        effect="slideUp"
      >
        <Layers color="#f77f00" /> Stack overflow
      </List>
      <List
        target="_blank"
        link="https://www.linkedin.com/in/imran-ali13?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
        effect="slideUp"
      >
        <Linkedin color="#0277b5" /> Linkedin
      </List>

      {/* List 3 */}
      {/* <div className="mt-5">Projects</div>
            <List
                target="_blank"
                link="https://github.com/"
                effect="slideUp"
            >
                <Shirt /> Ez CLothing
            </List>
            <List
                target="_blank"
                link="https://github.com/"
                effect="slideUp"
            >
                <ShoppingCart /> eCommerce
            </List>
            <List
                target="_blank"Linkedin
                link="https://github.com/"
                effect="slideUp"
            >
                <Ticket /> Lottery
            </List>
            <List
                target="_blank"
                link="https://github.com/-webrtc"
                effect="slideUp"
            >
                <Share2 /> File Sharing
            </List>
            <List
                target="_blank"
                link="https://github.com//dalleClone"
                effect="slideUp"
            >
                <ImageIcon /> Dalle Clone
            </List>
            <List
                target="_blank"
                link="https://snake-.vercel.app/"
                effect="slideUp"
            >
                <Scissors /> Ex Clone
            </List> */}
    </div>
  );
};

export default Menu;
