import { Progress } from 'antd';
import './CampaigneProgressBar.css';

const CampaigneProgressBar = ({amount, goalAmount, strokeColor="#5CB0FF", trailColor="#E2EAF2"}) => {
    return (
        <>
            <Progress percent={30} showInfo={false} strokeColor={strokeColor}  trailColor={trailColor} className='campaign-progressBar'/>
            <div className='campaign-current-donation'>{Math.round(amount)}ETH</div>
            <div className='campaign-goal'>Donated of {goalAmount}ETH Gloal</div>
        </>
    )
}

export default CampaigneProgressBar;