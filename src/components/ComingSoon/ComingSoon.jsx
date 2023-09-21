import PropTypes from 'prop-types';

const ComingSoon = ({ page }) => {
  return (
    <div>
      <h4 className='text-4xl font-semibold'>{page} Coming Soon....</h4>
    </div>
  );
};

ComingSoon.propTypes = {
  page: PropTypes.string.isRequired,
};
export default ComingSoon;
