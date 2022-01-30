import { Upload } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { useState } from "react";

const UploadComponent = () => {
	const [file, setFile] = useState([]);
	const onChangeHandler = (res: any) => {
		setFile(res.fileList);

		console.log(file);
	};
	return (
		<Upload
			name='avatar'
			listType='picture-card'
			className='avatar-uploader'
			style={{ width: "100%" }}
			showUploadList={true}
			accept='.jpg,.jpeg,.png'
			onChange={onChangeHandler}
			fileList={file}
		>
			<div>
				<PlusOutlined />
				<div style={{ marginTop: 8 }}>Upload</div>
			</div>
		</Upload>
	);
};

export default UploadComponent;
