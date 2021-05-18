import React from "react"
import MenuItem from "../menu-item/MenuItem.component"
import "./Directory.scss"
import sedan from "../../image/corolla-promo.jpg"
import luxury from "../../image/luxury.jpg"
import hatch from "../../image/hatch.jpg"
import truck from "../../image/truck.jpg"
import used from "../../image/used.jpg"


class Directory extends React.Component {
    constructor(){
        super();

        this.state = {

            sections: [
                {
                  title: 'Sedan',
                  imageUrl: sedan,
                  id: 1
                },
                {
                  title: 'Luxury',
                  imageUrl: luxury,
                  id: 2
                },
                {
                  title: 'Hatchback',
                  imageUrl: hatch,
                  id: 3
                },
                {
                  title: '4x4',
                  imageUrl: truck,
                  size: 'large',
                  id: 4
                },
                {
                  title: 'used',
                  imageUrl: used,
                  size: 'large',
                  id: 5
                }
              ]
            
        }
    }

    render(){
        return(
<div className="directory-menu">
    {this.state.sections.map(({title,imageUrl,id,size}) => (
        <MenuItem key={id} title={title} imageUrl={imageUrl}size={size}/>
    )

    )}

</div>
        )
    }
}

export default Directory;