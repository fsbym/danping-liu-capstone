import React, { useState } from "react"
import { useForm } from "react-hook-form"
import { counter } from "../../../src/declarations/counter"
import { Principal } from "@dfinity/principal"
import Item from "../../components/Item/Item"

export default function Mint() {
  const { register, handleSubmit } = useForm()
  const [nftPrincipal, setNFTPrincipal] = useState("")
  const [loaderHidden, setLoaderHidden] = useState(true)

  async function onSubmit(data) {
    setLoaderHidden(false)
    const name = data.name
    const image = data.image[0]
    const imageArray = await image.arrayBuffer()
    const imageByteData = [...new Uint8Array(imageArray)]

    const newNFTID = await counter.mint(imageByteData, name)
    setNFTPrincipal(newNFTID)
    setLoaderHidden(true)
  }

  if (nftPrincipal == "") {
    return (
      <div className="mint__wrapper">
        <div hidden={loaderHidden} className="mint_hid">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <h3 className="mint__text1">Create NFT</h3>
        <h6 className="mint__text2">Upload Image</h6>
        <form className="mint__form" noValidate="" autoComplete="off">
          <div className="mint__uploadwrapper">
            <input
              {...register("image", { required: true })}
              className="mint__uploadwrapper--input"
              type="file"
              accept="image/x-png,image/jpeg,image/gif,image/svg+xml,image/webp"
            />
          </div>
          <h6 className="mint__uploadwrapper--text1">Collection Name</h6>
          <div className="form-FormControl-root form-TextField-root form-FormControl-marginNormal form-FormControl-fullWidth">
            <div className="form-InputBase-root form-OutlinedInput-root form-InputBase-fullWidth form-InputBase-formControl">
              <input
                {...register("name", { required: true })}
                placeholder="e.g. Mantou"
                type="text"
                className="form-InputBase-input form-OutlinedInput-input"
              />
              <fieldset className="PrivateNotchedOutline-root-60 form-OutlinedInput-notchedOutline"></fieldset>
            </div>
          </div>
          <div className="form-ButtonBase-root form-Chip-root makeStyles-chipBlue-108 form-Chip-clickable">
            <span onClick={handleSubmit(onSubmit)} className="form-Chip-label">
              Mint NFT
            </span>
          </div>
        </form>
      </div>
    )
  } else {
    return (
      <div className="minter-container">
        <h3 className="Typography-root makeStyles-title-99 Typography-h3 form-Typography-gutterBottom">
          Minted!
        </h3>
        <div className="horizontal-center">
          <Item id={nftPrincipal.toText()} />
        </div>
      </div>
    )
  }
}
