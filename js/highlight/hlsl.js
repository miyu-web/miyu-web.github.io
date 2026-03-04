// HLSL 语法定义 - 适配 highlight.js
hljs.registerLanguage('hlsl', function(hljs) {
  var KEYWORDS = {
    keyword:
      'asm asm_fragment bool break case char class const continue default do double else enum extern ' +
      'float for half if in inline inout int matrix out pass pixelfragment point polygon ' +
      'precision sampler sampler1D sampler2D sampler3D samplerCUBE struct string subroutine ' +
      'switch texture texture1D texture2D texture3D textureCUBE then typedef uniform ' +
      'void volatile while float1 float2 float3 float4 float1x1 float1x2 float1x3 float1x4 ' +
      'float2x1 float2x2 float2x3 float2x4 float3x1 float3x2 float3x3 float3x4 ' +
      'float4x1 float4x2 float4x3 float4x4 int1 int2 int3 int4 half1 half2 half3 half4 ' +
      'bool1 bool2 bool3 bool4 uint uint1 uint2 uint3 uint4 void return'
    ,
    built_in:
      'abs acos all any asin atan atan2 ceil clamp cos cosh cross ddx ddy degrees determinant ' +
      'distance dot exp exp2 faceforward floor fmod frac frexp fwidth hypot isfinite isinf isnan ' +
      'ldexp length lerp log log2 log10 max min modf mul normalize pow radians reflect refract ' +
      'round rsqrt saturate sign sin sincos sinh smoothstep sqrt step tan tanh transpose ' +
      'tex1D tex2D tex3D texCUBE lit dot cross normalize length distance ' +
      'mul add sub mul div min max clamp lerp step smoothstep'
  };

  var NUMBERS = {
    className: 'number',
    variants: [
      { begin: '\\b(0[xX][0-9a-fA-F]+)' }, // 十六进制
      { begin: '\\b(\\d+\\.\\d*|\\.\\d+)([eE][+-]?\\d+)?' }, // 浮点数
      { begin: '\\b\\d+' } // 整数
    ]
  };

  var STRINGS = {
    className: 'string',
    variants: [
      { begin: '"', end: '"', contains: [hljs.BACKSLASH_ESCAPE] },
      { begin: "'", end: "'", contains: [hljs.BACKSLASH_ESCAPE] }
    ]
  };

  var COMMENTS = {
    variants: [
      hljs.COMMENT('//', '$'),
      hljs.COMMENT('/\\*', '\\*/')
    ]
  };

  return {
    name: 'HLSL',
    aliases: ['hlsl', 'hlsl5', 'hlsl4', 'fx', 'fxh'],
    keywords: KEYWORDS,
    contains: [
      COMMENTS,
      STRINGS,
      NUMBERS,
      {
        className: 'preprocessor',
        begin: '#', end: '$',
        keywords: {
          keyword: 'define undef if ifndef ifdef else elif include pragma line error'
        }
      },
      {
        className: 'type',
        begin: '\\b(sampler|texture|float|int|bool|half|uint|void|struct)\\b'
      }
    ]
  };
});