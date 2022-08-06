import { Progress } from 'antd';
import './CampaigneProgressBar.css';

const CampaigneProgressBar = ({amount, goalAmount}) => {
    return (
        <>
            <Progress percent={30} showInfo={false} strokeColor="#5CB0FF"  trailColor="#E2EAF2" className='campaign-progressBar'/>
            <div className='campaign-current-donation'>{Math.round(amount)}ETH</div>
            <div className='campaign-goal'>Donated of {goalAmount}ETH Gloal</div>
        </>
    )
}

export default CampaigneProgressBar;