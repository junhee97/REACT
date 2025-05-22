// 01
function handleClick_01() {
    console.log("clicked_01");
}

export function Component_01() {
    return (
        <div>
            <h1>HI - 1</h1>
            <button onClick={handleClick_01}>CLICK ME</button>
        </div>
    );
}

// 02
export function Component_02() {
    function handleClick_02() {
        console.log("clicked_02");
    }
    return (
        <div>
            <h1>HI - 2</h1>
            <button onClick={handleClick_02}>CLICK ME</button>
        </div>
    );
}

// 03
export function Component_03() {
    function handleClick_03(event) {
        console.log("keydown ", event.target.value);
    }
    return (
        <div>
            <h1>HI - 3</h1>
            <input type="text" onKeyDown={handleClick_03} />
        </div>
    );
}