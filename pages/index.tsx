import React, { Component } from "react";
import { observable, action } from "mobx";
import { observer, inject } from "mobx-react";
import { PageHead } from "../components";

@observer
class index extends Component {
	render() {
		return (
			<div>
				<PageHead />
				theseed
			</div>
		);
	}
}
export default index;
