import { Filp } from './enum';
import Icon from './Icon';


type IFaceIcon = typeof Icon & {
  Filp: typeof Filp;
}

function getFaceIcon() {
  const FaceIcon = Icon as IFaceIcon;
  FaceIcon.Filp = Filp;
  return FaceIcon;
}

export default getFaceIcon();