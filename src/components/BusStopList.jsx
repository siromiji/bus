import './BusStopList.css';
import { bs } from '../configs/bs.js';
import { useNavigate } from 'react-router-dom';


function BusStopList() {
const navigate = useNavigate();

    return (
        <>  <div className='busstop-search' >
            <input type="text" placeholder="정류장을 검색하세요."/>
            </div>
            <div className='busstop-conatainer'>
                {
                    bs.length > 0 && bs.map(item => {
                        return (
                            <div className='busstop-contentBox' key={item.bsId} onClick={()=>{navigate(`/busstopdetail`)}}>
                                <div className='busstop-leftbox'>
                                    <p>정류장</p>
                                </div>
                                <div className='busstop-textwrap'>
                                    <p className='busstop-title'>{item.bsNm}</p>
                                    <p className='busstop-number'>{item.wincId}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>



        </>
    )
}

export default BusStopList;