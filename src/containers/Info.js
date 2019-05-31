import React from 'react';
import './Info.css';

const Info = () => {
    return (
        <div className='info'>
            <div className='sectioncontainer'>
                <div className='infobox'></div>
                <div className='infobox'>
                    <h1>So what’s going on above?</h1>
                    <p>You may be thinking to yourself, “Isn’t this just Tetris without the playing field?” And you’re right; much like regular Tetris, you cycle through randomly chosen pieces that are put into a queue that you can refer to as you play. When thought of that way, this queue doesn’t seem very exciting. After all, pieces are just given to you randomly.</p>
                    <p>But what if I told you that the algorithm for choosing pieces in Tetris <i>isn’t</i> fully random?</p>
                    <p>In fact, most (if not all) modern Tetris games implement what many would call the <b>“random bag”</b> system, which still guarantees a great degree of randomness, but also ensures that the player won’t receive too much or too little of each piece.</p>
                </div>
            </div>
            <div className='sectioncontainer'>
                <div className='infobox'></div>
                <div className='infobox'>
                    <h1>How does this “random bag” system work?</h1>
                    <p>Think of it this way: you start a game of Tetris, and are given a playing field and a bag containing one of each Tetris piece (also known as a tetromino). You start playing by reaching into the bag without looking and dropping the first tetromino you grab into the field. When the bag runs out of pieces, it is replenished with a new set of tetrominoes, which also consists of one of each piece. Rinse and repeat until the game is over.</p>
                    <p>Modern Tetris works in this exact way, except without a physical playing field or bag (so we don’t have to worry about a finite number of tetrominoes). The game creates a random permutation of these pieces and puts them in a queue. When the player needs more pieces, a new permutation is created and placed into the queue. This ensures that you will see one of every piece per seven-tetromino string, as demonstrated above by the visual below the queue.</p>
                </div>
            </div>
            <div className='sectioncontainer'>
                <div className='infobox'></div>
                <div className='infobox'>
                    <h1>Why is this information helpful?</h1>
                    <p>To most people, this system shouldn’t matter, as the game can still be played well without any knowledge of it. However, intermediate and advanced players of Tetris can keep this system in mind while building, allowing them to account for every piece that comes in as they build.</p>
                    <p>This system also comes with some fancy implications that one can easily appreciate:</p>
                    <ul>
                        <li>You will never get three or more of the same piece in a row.</li>
                        <li>If you use an I-piece and need another one, the next I-piece will be 1 piece away in the best-case scenario, and 13 pieces away in the worst case. This applies to every other tetromino as well.</li>
                        <li>A string of S and Z pieces will never last more than 4 pieces. This also applies to J and L pieces.</li>
                        <li>Depending on which pieces you get at the very start of a Tetris run, you can consistently create certain builds, as the first seven pieces consist of one of each piece.</li>
                    </ul>
                </div>
            </div>
            <div className='sectioncontainer'>
                <div className='infobox'></div>
                <div className='infobox'>
                    <h1>Why did you make this?</h1>
                    <p>Simply put, I like Tetris and wanted to see a visual representation of its “random bag” system without having to worry about stacking pieces quickly and efficiently ingame. Also, I wanted to play around with React.</p>
                </div>
            </div>
        </div>
    )
}

export default Info;