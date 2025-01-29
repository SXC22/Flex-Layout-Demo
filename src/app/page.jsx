'use client';

import Image from "next/image";
import SettingComponent from "./component/settingComponent";
import PreviewComponent from "./component/previewComponent";
import { useState } from "react";
import StyleComponent from "./component/styleComponent";

export default function Home() {
	const [containerStyles, setContainerStyles] = useState({});
	const [numberDivs, setNumberDivs] = useState(3);
	
	const updateStyle = (field, value) => {
		setContainerStyles((prev) => {
			const temp = {...prev};
			temp[field] = value;
			return temp;
		})
	}

	return (
		<div className="flex justify-between w-screen h-screen">
			<section className="m-10 w-full max-w-[calc(100%_-_var(--sidebar-width))]">
				<PreviewComponent styles={containerStyles} n={numberDivs}/>
			</section>
			<section className="flex flex-col bg-[--preview-background] w-[--sidebar-width] h-full border border-[--card-background] shadow py-10 px-9">
				{/* <section className="flex flex-col"> */}
					<section className="flex-1">
						
						<SettingComponent 
							fieldValue={"number"} 
							type="number"
							value={numberDivs}
							callBack={ (field, value) => setNumberDivs(value) }
						></SettingComponent>
						
						{/* GAP PROPERTY */}
						<SettingComponent 
							fieldValue={"gap"} 
							type="number"
							value="0"
							callBack={ (field, value) => updateStyle(field, value+'px') }
						></SettingComponent>

						{/* DISPLAY PROPERTY */}
						<SettingComponent 
							fieldValue={"display"} 
							options={["block", "flex"]}
							callBack={ updateStyle }
						></SettingComponent>

						{/* FLEX DIRECTION PROPERTIES */}
						<SettingComponent 
							fieldValue={"flexDirection"} 
							options={["row", "column", "row-reverse", "column-reverse"]}
							callBack={ updateStyle }
						></SettingComponent>

						{/* FLEX-WRAP PROPERTY */}
						<SettingComponent 
							fieldValue={"flexWrap"} 
							options={["nowrap", "wrap", "wrap-reverse"]}
							callBack={ updateStyle }
						></SettingComponent>

						{/* JUSTIFY-CONTENT PROPERTY */}
						<SettingComponent 
							fieldValue={"justifyContent"} 
							options={["flex-start", "flex-end", "center", "space-between", "space-around", "space-evenly"]}
							callBack={ updateStyle }
						></SettingComponent>

						{/* ALIGN-CONTENT PROPERTY */}
						<SettingComponent 
							fieldValue={"alignContent"} 
							options={["stretch", "flex-start", "flex-end", "center", "space-between", "space-around", "space-evenly"]}
							callBack={ updateStyle }
						></SettingComponent>

						{/* ALIGN-ITEMS PROPERTY */}
						<SettingComponent 
							fieldValue={"alignItems"} 
							options={["stretch", "flex-start", "flex-end", "center", "baseline"]}
							callBack={ updateStyle }
						></SettingComponent>
						
					</section>

					<section>
						<StyleComponent styles={containerStyles} />
					</section>
				{/* </section> */}
			</section>
		</div>
	);
}
