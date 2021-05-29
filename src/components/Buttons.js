function Buttons() {
    return (
        <div id="off-page-buttons-div">
            <button className="offPgBtn" onClick={() => window.print()}>Generate PDF</button>
            <form action="https://www.codesweetly.com/" method="get" target="_blank">
                <button type="submit" className="offPgBtn">Useful Articles</button>
            </form>
        </div>
    )
}

export default Buttons;