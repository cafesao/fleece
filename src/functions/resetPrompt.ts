import { IProps } from 'interface';

export function resetPrompt(props: IProps) {
  props.prompt = '';
  props.promptNewLines = 0;
  props.token = '';
  props.generating = false;
  props.newLinesInARow = 0;
}
