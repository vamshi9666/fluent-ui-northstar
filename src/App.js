import logo from "./logo.svg";
import "./App.css";
import {gridCellMultipleFocusableBehavior, Table, Button, Flex, Dialog} from "@fluentui/react-northstar";
import {data} from "./data";
import {useState} from "react";

const rawData = [
    {
        id: "1",
        name: "Vamsi Krishna",
        age: "25",
        image: {
            uri: "https://picsum.photos/200/300/?random",
        },
    },
    {
        id: "2",
        name: "Vamsi Krishna",
        age: "25",
        image: {
            uri: "https://picsum.photos/200/300/?random",
        },
    },
    {
        id: "3",
        name: "Vamsi Krishna",
        age: "25",
        image: {
            uri: "https://picsum.photos/200/300/?random",
        },
    },
];



function App() {

    const [selectedRow,setSelectedRow]=useState(null)

    const header = {
        items: ['id', 'subject', 'from', 'buttons'],
    }
    const moreActionCell = {
        content: (
            <div>
                <Flex gap="gap.smaller">
                    <Dialog
                        cancelButton="Cancel"
                        confirmButton="Confirm"
                        content={<Primary selectedItem={selectedRow}/>}
                        header="Action confirmation"
                        trigger={<Button content="Primary" primary/>}
                    />
                    <Button content="Secondary" secondary/>
                </Flex>
            </div>
        ),
        accessibility: gridCellMultipleFocusableBehavior,
    }
    let finalRow = []
    let mainRow = []
    data.map((item,index) => {
        let obj = {}
        header.items.map((si) => {
            if (si === 'from') {
                obj[si] = item[si].user.displayName === null ? 'Null' : item[si].user.displayName
            } else if (si === 'buttons') {
                obj[si] = {...moreActionCell,onClick: e => {
                        // console.log(index,'e')
                       setSelectedRow(index)
                        e.stopPropagation()
                    },}
            } else {
                obj[si] = item[si] === null ? 'null' : item[si]
            }

        })
        finalRow.push(obj)
    })
    if (finalRow.length > 0) {
        finalRow.map((i, index) => {
            mainRow.push({
                key: index + 1,
                items: Object.values(i)
            })
        })

    }


    return (
        <div className="App">
            <Table
                // rows={data}
                header={header.items}
                rows={mainRow}
            />
        </div>
    );
}

export default App;

function Primary({selectedItem}) {

    let selectedDataObj=data[selectedItem]
     console.log(selectedDataObj,'selectedDataObj')
    return <div>
        {Object.keys(selectedDataObj).map(function (keyName, keyIndex) {
            let selecValue=selectedDataObj[keyName]
            if (typeof selecValue === 'string'){
                return<div><p>{keyName} : {selecValue}</p></div>
            }

        })
        }
    </div>;
}

