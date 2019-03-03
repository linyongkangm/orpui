import withPredefined from '$widget/withPredefined';
import Warper from './Warper';
const ListWarper: typeof Warper = withPredefined(Warper, {
  className: 'list-warper',
});

export default ListWarper;
