import { LexicalComposer } from '@lexical/react/LexicalComposer'
import EditorTheme from './theme/EditorTheme';
import { SharedHistoryContext } from './context/SharedHistoryContext';
import { TableContext } from './plugin/TablePlugin';
import { SharedAutocompleteContext } from './context/SharedAutocompleteContext';
import Nodes from './node/Nodes'
import BaseEditor from './BaseEditor';

interface IEditorProps {
    value?: string;
    onChange?: (value?: string) => void
}

function Editor(props: IEditorProps) {

    const initialConfig = {
        namespace: 'Custom',
        nodes: [...Nodes],
        onError: (error: Error) => {
            throw error;
        },
        theme: EditorTheme
    };

    return (
        <LexicalComposer initialConfig={initialConfig}>
            <SharedHistoryContext>
                <TableContext>
                    <div id='rt-editor' className='editor-shell'>
                        <BaseEditor />
                    </div>
                </TableContext>
            </SharedHistoryContext>
        </LexicalComposer>
    )
}

export default Editor;