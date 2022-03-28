import "./featuredInfo.css"
import { ArrowDownward, ArrowUpward } from "@material-ui/icons"



export default function FeaturedInfo() {
  return (
    <div className="featured">
      <div className="featureadItem">
        <span className="featuredTitle">Revenue</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">31,546€</span>
          <span className="featuredMoneyRate">-12,3452 <ArrowDownward className="featuredIcon negative"/>
          </span>
        </div>
        <span className="featuredSub">Compared to last Month</span>
      </div>

       <div className="featureadItem">
        <span className="spanfeaturedTitle">Sales</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">45,566€</span>
          <span className="featuredMoneyRate">-340 <ArrowDownward className="featuredIcon negative"/>
          </span>
        </div>
        <span className="featuredSub">Compared to last Month</span>
      </div>
      
       <div className="featureadItem">
        <span className="spanfeaturedTitle">Cost</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">32,11€</span>
          <span className="featuredMoneyRate">+21 <ArrowUpward className="featuredIcon"/>
          </span>
        </div>
        <span className="featuredSub">Compared to last Month</span>
     </div>
    </div>
  )
}