import Aside from './Aside';
import Footer from './Footer';
import Header from './Header';
import Layout from './Layout';
import Section from './Section';
import './style.scss';

type TypeLayout = typeof Layout & {
  Header: typeof Header;
  Footer: typeof Footer;
  Section: typeof Section;
  Aside: typeof Aside;
};

function getFaceLayout() {
  const FaceLayout = Layout as TypeLayout;
  FaceLayout.Header = Header;
  FaceLayout.Footer = Footer;
  FaceLayout.Section = Section;
  FaceLayout.Aside = Aside;
  return FaceLayout;
}

export default getFaceLayout();
