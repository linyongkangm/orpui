import Select from './Select';
import Option from './Option';


type IFaceSelect = typeof Select & {
  Option: typeof Option;
}

function getFaceSelect() {
  const FaceSelect = Select as IFaceSelect;
  FaceSelect.Option = Option;
  return FaceSelect;
}

export default getFaceSelect();
