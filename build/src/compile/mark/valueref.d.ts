/**
 * Utility files for producing Vega ValueRef for marks
 */
import { Channel } from '../../channel';
import { Config } from '../../config';
import { ChannelDef, FieldDef, FieldRefOption, TextFieldDef, ValueDef } from '../../fielddef';
import { Scale } from '../../scale';
import { StackProperties } from '../../stack';
import { VgValueRef } from '../../vega.schema';
/**
 * @return Vega ValueRef for stackable x or y
 */
export declare function stackable(channel: 'x' | 'y', channelDef: ChannelDef<string>, scaleName: string, scale: Scale, stack: StackProperties, defaultRef: VgValueRef): VgValueRef;
/**
 * @return Vega ValueRef for stackable x2 or y2
 */
export declare function stackable2(channel: 'x2' | 'y2', aFieldDef: FieldDef<string>, a2fieldDef: FieldDef<string>, scaleName: string, scale: Scale, stack: StackProperties, defaultRef: VgValueRef): VgValueRef;
/**
 * Value Ref for binned fields
 */
export declare function bin(fieldDef: FieldDef<string>, scaleName: string, side: 'start' | 'end', offset?: number): VgValueRef;
export declare function fieldRef(fieldDef: FieldDef<string>, scaleName: string, opt: FieldRefOption, mixins?: {
    offset?: number | VgValueRef;
    band?: number | boolean;
}): VgValueRef;
export declare function band(scaleName: string, band?: number | boolean): VgValueRef;
/**
 * @returns {VgValueRef} Value Ref for xc / yc or mid point for other channels.
 */
export declare function midPoint(channel: Channel, channelDef: ChannelDef<string>, scaleName: string, scale: Scale, defaultRef: VgValueRef | 'zeroOrMin' | 'zeroOrMax'): VgValueRef;
export declare function text(textDef: TextFieldDef<string> | ValueDef<any>, config: Config): VgValueRef;
export declare function midX(width: number, config: Config): VgValueRef;
export declare function midY(height: number, config: Config): VgValueRef;
