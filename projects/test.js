// import {ObjectArray} from "./modules/BETL/index.js";
// import relevant things from modules dir

// async function main() { }
// I usually keep this as an entry point for the code
// add parameters to it if you want/can configure them from index.js
// index.js for me is just a project selection place not the main executor
// change structure as your wish

// I even put the html or file input output selections in this location
// check below a basic example of it
// EXAMPLE:
//      Note this example is for an older version of the modules so some API methods may have changed.
//      And this is an example to show case how to handle the file & dom changes for input/output.

/*
import { DeduplicateGenerator, ObjectArray, PivotGenerator, SortGenerator } from "../modules/BETL/index.js";
import { Exporter } from "../modules/Exporter/index.js";
import { ReadFile } from "../modules/file-reader/index.js";
import { CSV2JSON, XLSX2JSON } from "../modules/toJSON-convertor/index.js";

export async function main() {
    const initialHTMLcontent = `
        <h1>SLA KPI Time ends</h1>
        <label style="cursor:pointer">
            Provide time end report file as CSV:
            <input id="fi" type="file" style="cursor:pointer" />
        </label>
    `;
    document.body.innerHTML = initialHTMLcontent;
    const fileInput = document.getElementById("fi");

    fileInput.addEventListener("change", async () => {
        try {
            const timeendData = await getData(fileInput);
            const baseData = await getBase("./resources/sla time end base data.xlsx");
            update(timeendData, baseData);
        } catch (e) {
            document.body.innerHTML = "<h1>SLA KPI Time ends</h1>" + e.stack.replace(/\n/g, "<br>");
            console.error(e);
        }
    });

    // -- TESTING PURPOSE CODE --
    // const timeendData = await getData("./resources/temp/monthly timeends.csv");
    // const baseData = await getBase("./resources/sla time end base data.xlsx");
    // update(timeendData, baseData);
    // -- TESTING PURPOSE CODE --
}

async function getBase(filePath) {
    const rawData = await ReadFile.from(ReadFile.Strategy.FilePath, filePath).getArrayBuffer();
    return await (await XLSX2JSON.from(rawData)).load();
}

async function getData(fileInput) {
    // -- TESTING PURPOSE CODE --
    // const rawData = await ReadFile.from(ReadFile.Strategy.FilePath, fileInput).getString();
    // -- TESTING PURPOSE CODE --

    const rawData = await ReadFile.from(ReadFile.Strategy.HTMLInputElement, fileInput).getString();
    return CSV2JSON.from(rawData).setTextQualifier('"').load().data;
}

function update(data, base) {
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    const timeends = ObjectArray.createInstance(data)
        .drop("instance name")
        .rename("trigger time", "trigger")
        .rename("end time", "end")
        .updateColumn("trigger", item => {
            const d = new Date(item.trigger);
            return `${String(d.getDate()).padStart(2, "0")}-${months[d.getMonth()]}`;
        })
        .updateColumn("end", item => {
            if (item.end === "")
                return "Failed";

            const d = new Date(item.end);
            const date = `${String(d.getDate()).padStart(2, "0")}-${months[d.getMonth()]}`;

            let hour = d.getHours(), ampm = "AM";
            const min = d.getMinutes();
            if (hour > 12) {
                hour -= 12;
                ampm = "PM";
            }
            else if (hour === 0)
                hour = 12;
            const time = `${String(hour).padStart(2, "0")}:${String(min).padStart(2, "0")}${ampm}`;

            return date === item.trigger ? time : `${date} ${time}`;
        })
        .sort(SortGenerator.desc("end"))
        .deduplicate(DeduplicateGenerator.setDeduplicatingColumns("workflow", "trigger"))
        .pivot(PivotGenerator.pivotOn("trigger").values("end"))
        .renameRegex("*_end", "$0")
        // .execute()
        ;

    const joinedBaseData = ObjectArray.createInstance(base)
        .leftJoin(timeends, (l, r) => l['Critical Batch Jobs'].toLowerCase() === r.workflow.toLowerCase())
        .sort(SortGenerator.asc("S.No", item => Number(item)))
        .drop("workflow")
        .execute()
        ;

    const descCols = joinedBaseData.columns.slice(0, 7);
    const dateCols = joinedBaseData.columns.slice(7);
    const newCols = [...descCols, ...dateCols.sort()];
    const result = joinedBaseData.readOnlyData;

    const htmlContent = Exporter.toHTML(result, newCols).result;
    document.body.innerHTML += htmlContent;

    const downloadBtn = document.createElement("button");
    downloadBtn.textContent = "Download table in XLS format"
    downloadBtn.addEventListener("click", () => Exporter.toXLS(result, newCols).download("SLAKPI time ends.xls"));
    document.body.appendChild(downloadBtn);
}
*/