import withPredefined from '$widget/withPredefined';
import Warper from './Warper';

const ItemWarper = withPredefined(Warper, {
  className: 'item-warper',
}) as typeof Warper;

export default ItemWarper;
