import withPredefined from '$widget/withPredefined';
import Warper from './Warper';

const ItemWarper: typeof Warper = withPredefined(Warper, {
  className: 'item-warper',
});
export default ItemWarper;
