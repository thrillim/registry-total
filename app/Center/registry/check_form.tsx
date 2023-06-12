export function CheckBox({text}) {

    return (
        <label className="label cursor-pointer flex flex-row gap-5 items-start">
            <span className="label-text max-w-md text-justify">•   {text}.</span>
            <input type="checkbox" className="checkbox"
            />
        </label>
    )
}