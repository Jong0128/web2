import React, { useState } from 'react';
import { Modal, Upload } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import './PostForm.css';

const getBase64 = (file) =>
    new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = (error) => reject(error);
    });

function PostForm() {
    const [title, setTitle] = useState('');
    const [category, setCategory] = useState('');
    const [content, setContent] = useState('');

    {/* */ }
    const [previewOpen, setPreviewOpen] = useState(false);
    const [previewImage, setPreviewImage] = useState('');
    const [previewTitle, setPreviewTitle] = useState('');
    const [fileList, setFileList] = useState([]);
    const handleCancel = () => setPreviewOpen(false);
    const handlePreview = async (file) => {
        if (!file.url && !file.preview) {
            file.preview = await getBase64(file.originFileObj);
        }
        setPreviewImage(file.url || file.preview);
        setPreviewOpen(true);
        setPreviewTitle(file.name || file.url.substring(file.url.lastIndexOf('/') + 1));
    };
    const handleChange = ({ fileList: newFileList }) => setFileList(newFileList);
    const uploadButton = (
        <div>
            <PlusOutlined />
            <div
                style={{
                    marginTop: 8,
                }}
            >
                Upload
            </div>
        </div>
    );

    {/* */ }

    const handleSubmit = (e) => {
        e.preventDefault();
        // 이 부분에서 게시글을 서버에 저장하거나 다른 작업을 수행할 수 있습니다.
        // title, category, content 상태 변수를 이용해 데이터를 처리합니다.
        console.log('게시글이 제출되었습니다:', { title, category, content });
    };

    return (
        <div className='PostFormContainer'>
            <h2>게시글 작성</h2>
            <p>욕설/비방글은 경고없이 삭제될 수 있습니다.<br />혐오, 분란조장글은 자제 해주세요.</p>
            <form onSubmit={handleSubmit} className='PostForm'>
                <div>
                    <label htmlFor="title">제목</label>
                </div>
                <input className='TitleInput'
                    type="text"
                    id="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
                <div className='space'>
                    <label htmlFor="category">카테고리</label>
                </div>
                <select
                    id="category"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    required
                >
                    <option value="수집/취미">수집/취미</option>
                    <option value="자유게시판">자유게시판</option>
                    <option value="중고장터">중고장터</option>
                    <option value="건의사항">건의사항</option>
                    {/* 다른 카테고리 옵션들을 추가할 수 있습니다 */}
                </select>

                <div className='space'>
                    <label htmlFor="content">글쓰기</label>
                </div>
                <textarea className='contentInput'
                    id="content"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    required
                />

            </form>
            <div className='uploadForm'>
            <label htmlFor="upload">사진(선택사항) <span id='uploadCaution'> 판매글 작성시 3장이상 업로드 필수입니다!</span></label>
            </div>
            <div>
                <Upload
                    action="https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188"
                    listType="picture-card"
                    fileList={fileList}
                    onPreview={handlePreview}
                    onChange={handleChange}
                >
                    {fileList.length >= 8 ? null : uploadButton}
                </Upload>
                <Modal open={previewOpen} title={previewTitle} footer={null} onCancel={handleCancel}>
                    <img
                        alt="example"
                        style={{
                            width: '100%',
                        }}
                        src={previewImage}
                    />
                </Modal>
                <div className='ButtonContainer'>
                    <button type="submit" className='PostButton'>올리기</button>
                </div>
            </div>
        </div>
    );
}

export default PostForm;
