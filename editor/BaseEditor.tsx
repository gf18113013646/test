import { useEffect, useState } from "react";
import ToolbarPlugin from "./plugin/ToolbarPlugin";
import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
import { useSharedHistoryContext } from "./context/SharedHistoryContext";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import ContentEditable from "./ui/ContentEditable";
import { LexicalErrorBoundary } from "@lexical/react/LexicalErrorBoundary";
import DragDropPaste from "./plugin/DragDropPastePlugin";
import { AutoFocusPlugin } from "@lexical/react/LexicalAutoFocusPlugin";
import { ClearEditorPlugin } from "@lexical/react/LexicalClearEditorPlugin";
import ComponentPickerPlugin from "./plugin/ComponentPickerPlugin";
import EmojiPickerPlugin from "./plugin/EmojiPickerPlugin";
import MentionsPlugin from "./plugin/MentionsPlugin";
import EmojisPlugin from "./plugin/EmojisPlugin";
import { HashtagPlugin } from "@lexical/react/LexicalHashtagPlugin";
import KeywordsPlugin from "./plugin/KeywordsPlugin";
import SpeechToTextPlugin from "./plugin/SpeechToTextPlugin";
import AutoLinkPlugin from "./plugin/AutoLinkPlugin";
import CommentPlugin from "./plugin/CommentPlugin";
import ActionsPlugin from "./plugin/ActionsPlugin";
import MarkdownShortcutPlugin from "./plugin/MarkdownShortcutPlugin";
import CodeHighlightPlugin from "./plugin/CodeHighlightPlugin";
import { ListPlugin } from "@lexical/react/LexicalListPlugin";
import { CheckListPlugin } from "@lexical/react/LexicalCheckListPlugin";
import ListMaxIndentLevelPlugin from "./plugin/ListMaxIndentLevelPlugin";
import { TablePlugin } from "@lexical/react/LexicalTablePlugin";
import TableCellResizer from "./plugin/TableCellResizer";
import ImagesPlugin from "./plugin/ImagesPlugin";
import InlineImagePlugin from "./plugin/InlineImagePlugin";
import LinkPlugin from "./plugin/LinkPlugin";
import PollPlugin from "./plugin/PollPlugin";
import ClickableLinkPlugin from "@lexical/react/LexicalClickableLinkPlugin";
import useLexicalEditable from "@lexical/react/useLexicalEditable";
import { HorizontalRulePlugin } from "@lexical/react/LexicalHorizontalRulePlugin";
import EquationsPlugin from "./plugin/EquationsPlugin";
import ExcalidrawPlugin from "./plugin/ExcalidrawPlugin";
import TabFocusPlugin from "./plugin/TabFocusPlugin";
import { TabIndentationPlugin } from "@lexical/react/LexicalTabIndentationPlugin";
import CollapsiblePlugin from "./plugin/CollapsiblePlugin";
import PageBreakPlugin from "./plugin/PageBreakPlugin";
import { LayoutPlugin } from "./plugin/LayoutPlugin/LayoutPlugin";
import { CAN_USE_DOM } from "./util/environment";
import DraggableBlockPlugin from "./plugin/DraggableBlockPlugin";
import CodeActionMenuPlugin from "./plugin/CodeActionMenuPlugin";
import FloatingLinkEditorPlugin from "./plugin/FloatingLinkEditorPlugin";
import TableCellActionMenuPlugin from './plugin/TableActionMenuPlugin';
import TableHoverActionsPlugin from "./plugin/TableHoverActionsPlugin";
import FloatingTextFormatToolbarPlugin from "./plugin/FloatingTextFormatToolbarPlugin";


interface IBaseEditor { }

interface IBaseEditorProps { }

function BaseEditor(props: IBaseEditorProps) {
    const { historyState } = useSharedHistoryContext();

    const isEditable = useLexicalEditable();
    const placeholder = '请输入内容';

    const [isLinkEditMode, setIsLinkEditMode] = useState<boolean>(false);
    const [isSmallWidthViewport, setIsSmallWidthViewport] = useState<boolean>(false);

    useEffect(() => {
        const updateViewPortWidth = () => {
            const isNextSmallWidthViewport =
                CAN_USE_DOM && window.matchMedia('(max-width: 1025px)').matches;

            if (isNextSmallWidthViewport !== isSmallWidthViewport) {
                setIsSmallWidthViewport(isNextSmallWidthViewport);
            }
        };
        updateViewPortWidth();
        window.addEventListener('resize', updateViewPortWidth);

        return () => {
            window.removeEventListener('resize', updateViewPortWidth);
        };
    }, [isSmallWidthViewport]);

    const [floatingAnchorElem, setFloatingAnchorElem] = useState<HTMLDivElement | null>(null);
    const onRef = (_floatingAnchorElem: HTMLDivElement) => {
        if (_floatingAnchorElem !== null) {
            setFloatingAnchorElem(_floatingAnchorElem);
        }
    };

    return (
        <>
            <ToolbarPlugin setIsLinkEditMode={setIsLinkEditMode} />
            <div className='editor-container'>
                <DragDropPaste />
                <AutoFocusPlugin />
                <ClearEditorPlugin />
                <ComponentPickerPlugin />
                <EmojiPickerPlugin />

                <MentionsPlugin />
                <EmojisPlugin />
                <HashtagPlugin />
                <KeywordsPlugin />
                <SpeechToTextPlugin />
                <AutoLinkPlugin />
                <CommentPlugin />
                <HistoryPlugin externalHistoryState={historyState} />
                <RichTextPlugin
                    contentEditable={
                        <div className="editor-scroller">
                            <div className="editor" ref={onRef}>
                                <ContentEditable placeholder={placeholder} />
                            </div>
                        </div>
                    }
                    ErrorBoundary={LexicalErrorBoundary}
                />
                <MarkdownShortcutPlugin />
                <CodeHighlightPlugin />
                <ListPlugin />
                <CheckListPlugin />
                <ListMaxIndentLevelPlugin maxDepth={7} />
                <TablePlugin
                    hasCellMerge
                    hasCellBackgroundColor
                />
                <TableCellResizer />
                <ImagesPlugin />
                <InlineImagePlugin />
                <LinkPlugin />
                <PollPlugin />
                <ClickableLinkPlugin disabled={isEditable} />
                <HorizontalRulePlugin />
                <EquationsPlugin />
                <ExcalidrawPlugin />
                <TabFocusPlugin />
                <TabIndentationPlugin />
                <CollapsiblePlugin />
                <PageBreakPlugin />
                <LayoutPlugin />
                {floatingAnchorElem && !isSmallWidthViewport && (
                    <>
                        <DraggableBlockPlugin anchorElem={floatingAnchorElem} />
                        <CodeActionMenuPlugin anchorElem={floatingAnchorElem} />
                        <FloatingLinkEditorPlugin
                            anchorElem={floatingAnchorElem}
                            isLinkEditMode={isLinkEditMode}
                            setIsLinkEditMode={setIsLinkEditMode}
                        />
                        <TableCellActionMenuPlugin
                            anchorElem={floatingAnchorElem}
                            cellMerge={true}
                        />
                        <TableHoverActionsPlugin anchorElem={floatingAnchorElem} />
                        <FloatingTextFormatToolbarPlugin
                            anchorElem={floatingAnchorElem}
                            setIsLinkEditMode={setIsLinkEditMode}
                        />
                    </>
                )}
                <ActionsPlugin isRichText shouldPreserveNewLinesInMarkdown={false} />
            </div>
        </>
    )
}

export default BaseEditor;