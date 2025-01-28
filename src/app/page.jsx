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
		<div className="flex justify-between w-full h-screen">
			<section className="m-10 w-full">
				<PreviewComponent styles={containerStyles} n={numberDivs}/>
			</section>
			<section className="flex flex-col bg-[--preview-background] w-[--sidebar-width] h-full border border-[--card-background] shadow p-7">
				{/* <section className="flex flex-col"> */}
					<section className="flex-1">
						<div>
							<span>number of divs: 
								<input 
									value={numberDivs} 
									onInput={(e) => setNumberDivs(e.target.value)} 
									type="number"
								/>
							</span>
						</div>
						<SettingComponent 
							fieldValue={"justifyContent"} 
							options={["center", "space-between", "space-around", "space-evenly"]}
							callBack={ updateStyle }
						></SettingComponent>
						<SettingComponent 
							fieldValue={"flexWrap"} 
							options={["nowrap", "wrap", "wrap-reverse", "column-reverse"]}
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
