import ShortenItem from './ShortenItem'
import PropTypes from 'prop-types'

const ShortenUrlList = ({ data }) => {
  return (
    <div className='my-6 space-y-4'>
        {data.map((item) => (
            <ShortenItem key={item.id} {...item} />
        ))}
    </div>
  )
}

export default ShortenUrlList

ShortenUrlList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};