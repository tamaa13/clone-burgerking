import { useNavigate } from 'react-router-dom'

const News = () => {
    const navigate = useNavigate()
    return (
        <div className='lg:px-80 lg:pb-60 pb-20 px-5 pt-5'>
            <img className='cursor-pointer w-full' onClick={() => navigate('/news/v-1')} src="https://bkdelivery.co.id/media/landscape_image/2023/1/18/mez28xqf8xytdfzprxx2an.jpg" alt="" />
        </div>
    )
}

export default News