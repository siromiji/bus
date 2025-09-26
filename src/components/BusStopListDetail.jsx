import './BusStopListDetail.css';

function BusStopListDetail() {
    return (
        <>
            <div className='BusStopListDetail-container'>
                <div className='BusStopListDetail-leftbox'>
                        <p>정류장</p>
                </div>
                <div className='BusStopListDetail-textwrap'>
                    
                    <div className='BusStopListDetail-contentbox'>
                        <h1 className='BusStopListDetail-title'>
                            황금가교네거리
                        </h1>
                        <p className='BusStopListDetail-number'>2024122</p>
                    </div>
                    < div className='BusStopListDetail-buswrap'>
                        <div className='BusStopListDetail-buscontainer'>

                        </div>
                        <div className='BusStopListDetail-buscontainer'>

                        </div>
                    </div>

                </div>

                
            </div>
        </>
    )
}
export default BusStopListDetail; 