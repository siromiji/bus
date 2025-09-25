import './BusList.css';
import {route} from '../configs/route.js';
import { useNavigate } from 'react-router-dom';
// routeNo ,stNm,edNm ,routeId
 
function BusList() {
    const navigate =useNavigate();
    return(
        <>  <div className='busstop-search' >
            <input type="text" placeholder="버스를 검색하세요."/>
        </div>
        <div className='buslist-contentwrap'>
            {
                route.length > 0 && route.map(item=>{
                    return(
                        <div className='buslist-contentBox' key={item.routeId} onClick={()=>{navigate('/busdetail')}}>
                            <div className='buslist-leftbox'>
                                <p>버스</p>
                            </div>
                            <div className='buslist-textwrap'>
                                <p className='buslist-title'>{item.routeNo}</p>
                                <div className="buslist-textWrap">
                                    <div className='color-wrap'>
                                        <div className='buslist-redBox'>기점</div>
                                        <p>{item.stNm}</p>
                                    </div>
                                    <div className='color-wrap'>
                                        <div className='buslist-blueBox'>종점</div>
                                        <p>{item.edNm}</p>
                                    </div>
                                    

                                </div>
                            </div>
                        </div>
                    )
                })
                
            }
            </div>
            
        </>
    )
}

export default BusList;