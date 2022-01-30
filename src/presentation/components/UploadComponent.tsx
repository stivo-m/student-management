import { Upload } from "antd";
import { PlusOutlined } from "@ant-design/icons";

const UploadComponent = () => {
	return (
		<Upload
			name='avatar'
			listType='picture-card'
			className='avatar-uploader'
			style={{ width: "100%" }}
			showUploadList={false}
			action='https://www.mocky.io/v2/5cc8019d300000980a055e76'
		>
			<div>
				<PlusOutlined />
				<div style={{ marginTop: 8 }}>Upload</div>
			</div>
		</Upload>
	);
};

export default UploadComponent;
