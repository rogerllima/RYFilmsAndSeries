import { useState } from 'react';

const Cards = ({ poster }) => {
    const [posterInternal, setposterInternal] = useState(poster);

    return (
        <div>
            <img>
                {posterInternal}
            </img>
        </div>
    );
}

export default Cards;