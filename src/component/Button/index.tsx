import { Design, Size, Shape } from './enum';
import Button from './Button';


type IFaceButton = typeof Button & {
  Design: typeof Design;
  Size: typeof Size;
  Shape: typeof Shape;
}

function getFaceButton() {
  const FaceButton = Button as IFaceButton;
  FaceButton.Design = Design;
  FaceButton.Size = Size;
  FaceButton.Shape = Shape;
  return FaceButton;
}

export default getFaceButton();