import { useState } from 'react'
import Card from './card'
export default function NewsPopUp() {


    return (
        <div id="News" hidden={true }>
            <button>X</button>
            <h3>News</h3>
            <div>
                <Card
                    url={"https://www.postermania.it/81592-thickbox_default/locandina-the-avengers-marvel-comics-stan-lee-downey-iron-man-thor-cat4.jpg"}
                    descrizione={"film super eroi"}>
                </Card>
            </div>
        </div>
    )
}