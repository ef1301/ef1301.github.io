import working from '../assets/coding.gif';

const WorkingOnIt = ({japtrans})  => {
    return (
        <div id="working-on-it">
            <h2>{japtrans ? "このページはまだ完成していません..." : "This Page isn't Done Yet..."}</h2>
            <h3>{japtrans ? "また来てください。" : "Please Come Back Another Time."}</h3>
            <img src={working} alt="I'm still working."></img>
            <p>{japtrans ? "アニメ: らき☆すた" : "Anime: Lucky Star"}</p>
        </div>
    )
}

export default WorkingOnIt;