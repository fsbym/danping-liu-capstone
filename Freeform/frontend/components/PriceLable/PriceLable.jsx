import React from "react"

export default function PriceLable(props) {
  return (
    <div className="disButtonBase-root disChip-root makeStyles-price-23 disChip-outlined">
      <span className="disChip-label">{props.sellPrice} ping</span>
    </div>
  )
}
