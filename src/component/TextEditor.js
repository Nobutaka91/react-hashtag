import { EditorState } from 'draft-js';
import React, { useState } from 'react'
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

const TextEditor = () => {
  const [editorState, setEditorState] = useState(() => EditorState.createEmpty());

  return (
    <div>
      <Editor
        editorState={editorState}
        wrapperClassName="wrapperClassName" // エディターとツールバー両方に適用されるクラス
        editorClassName="editorClassName" // エディターに適用されるクラス
        onEditorStateChange={setEditorState}
        toolbarHidden={true} // ツールバーの非表示

        placeholder='ここに入力してください'
        // ハッシュタグ
        hashtag={{
          separator: " ",
          trigger: "#",
          className: 'hashtag', // カスタムクラスを指定(今回は文字に下線をつけるために使用)
        }}
      />
    </div>
  )
}

export default TextEditor