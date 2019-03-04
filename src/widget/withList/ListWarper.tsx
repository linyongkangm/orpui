import withPredefined from '$widget/withPredefined';
import Warper from './Warper';

const ListWarper = withPredefined(Warper, {
  className: 'list-warper',
}) as typeof Warper;

export default ListWarper;
