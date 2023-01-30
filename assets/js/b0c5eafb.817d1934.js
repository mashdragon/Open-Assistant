"use strict";(self.webpackChunkopen_assistant=self.webpackChunkopen_assistant||[]).push([[7757],{3905:(t,e,s)=>{s.d(e,{Zo:()=>d,kt:()=>c});var i=s(67294);function a(t,e,s){return e in t?Object.defineProperty(t,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[e]=s,t}function n(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.push.apply(s,i)}return s}function r(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?n(Object(s),!0).forEach((function(e){a(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):n(Object(s)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}function p(t,e){if(null==t)return{};var s,i,a=function(t,e){if(null==t)return{};var s,i,a={},n=Object.keys(t);for(i=0;i<n.length;i++)s=n[i],e.indexOf(s)>=0||(a[s]=t[s]);return a}(t,e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);for(i=0;i<n.length;i++)s=n[i],e.indexOf(s)>=0||Object.prototype.propertyIsEnumerable.call(t,s)&&(a[s]=t[s])}return a}var o=i.createContext({}),l=function(t){var e=i.useContext(o),s=e;return t&&(s="function"==typeof t?t(e):r(r({},e),t)),s},d=function(t){var e=l(t.components);return i.createElement(o.Provider,{value:e},t.children)},y="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return i.createElement(i.Fragment,{},e)}},u=i.forwardRef((function(t,e){var s=t.components,a=t.mdxType,n=t.originalType,o=t.parentName,d=p(t,["components","mdxType","originalType","parentName"]),y=l(s),u=a,c=y["".concat(o,".").concat(u)]||y[u]||m[u]||n;return s?i.createElement(c,r(r({ref:e},d),{},{components:s})):i.createElement(c,r({ref:e},d))}));function c(t,e){var s=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var n=s.length,r=new Array(n);r[0]=u;var p={};for(var o in e)hasOwnProperty.call(e,o)&&(p[o]=e[o]);p.originalType=t,p[y]="string"==typeof t?t:a,r[1]=p;for(var l=2;l<n;l++)r[l]=s[l];return i.createElement.apply(null,r)}return i.createElement.apply(null,s)}u.displayName="MDXCreateElement"},8623:(t,e,s)=>{s.r(e),s.d(e,{contentTitle:()=>r,default:()=>d,frontMatter:()=>n,metadata:()=>p,toc:()=>o});var i=s(87462),a=(s(67294),s(3905));const n={},r="Request Task",p={type:"api",id:"request-task",unversionedId:"request-task",title:"Request Task",description:"",slug:"/request-task",frontMatter:{},api:{tags:["tasks"],description:"Create new task.",operationId:"request_task_api_v1_tasks__post",requestBody:{content:{"application/json":{schema:{title:"TaskRequest",type:"object",properties:{type:{default:"random",title:"TaskRequestType",enum:["random","summarize_story","rate_summary","initial_prompt","prompter_reply","assistant_reply","rank_initial_prompts","rank_prompter_replies","rank_assistant_replies","label_initial_prompt","label_assistant_reply","label_prompter_reply"],type:"string",description:"An enumeration."},user:{title:"User",nullable:!0,required:["id","display_name","auth_method"],type:"object",properties:{id:{title:"Id",type:"string"},display_name:{title:"Display Name",type:"string"},auth_method:{title:"Auth Method",enum:["discord","local"],type:"string"}}},collective:{title:"Collective",type:"boolean",default:!1}},description:"The frontend asks the backend for a task."}}},required:!0},responses:{200:{description:"Successful Response",content:{"application/json":{schema:{title:"Response Request Task Api V1 Tasks  Post",anyOf:[{title:"TaskDone",type:"object",properties:{id:{title:"Id",type:"string",format:"uuid"},type:{title:"Type",enum:["task_done"],type:"string",default:"task_done"}},description:"Signals to the frontend that the task is done."},{title:"SummarizeStoryTask",required:["story"],type:"object",properties:{id:{title:"Id",type:"string",format:"uuid"},type:{title:"Type",enum:["summarize_story"],type:"string",default:"summarize_story"},story:{title:"Story",type:"string"}},description:"A task to summarize a story."},{title:"RateSummaryTask",required:["full_text","summary"],type:"object",properties:{id:{title:"Id",type:"string",format:"uuid"},type:{title:"Type",enum:["rate_summary"],type:"string",default:"rate_summary"},scale:{title:"Scale",default:{min:1,max:5},required:["min","max"],type:"object",properties:{min:{title:"Min",type:"integer"},max:{title:"Max",type:"integer"}}},full_text:{title:"Full Text",type:"string"},summary:{title:"Summary",type:"string"}},description:"A task to rate a summary."},{title:"InitialPromptTask",type:"object",properties:{hint:{title:"Hint",type:"string"},id:{title:"Id",type:"string",format:"uuid"},type:{title:"Type",enum:["initial_prompt"],type:"string",default:"initial_prompt"}},description:"A task to prompt the user to submit an initial prompt to the assistant."},{title:"ReplyToConversationTask",required:["conversation"],type:"object",properties:{id:{title:"Id",type:"string",format:"uuid"},type:{title:"Type",enum:["reply_to_conversation"],type:"string",default:"reply_to_conversation"},conversation:{title:"Conversation",type:"object",properties:{messages:{title:"Messages",type:"array",items:{title:"ConversationMessage",required:["text","is_assistant"],type:"object",properties:{id:{title:"Id",type:"string",format:"uuid"},frontend_message_id:{title:"Frontend Message Id",type:"string"},text:{title:"Text",type:"string"},is_assistant:{title:"Is Assistant",type:"boolean"}},description:"Represents a message in a conversation between the user and the assistant."},default:[]}},description:"Represents a conversation between the prompter and the assistant."}},description:"A task to prompt the user to submit a reply to a conversation."},{title:"PrompterReplyTask",required:["conversation"],type:"object",properties:{hint:{title:"Hint",type:"string"},id:{title:"Id",type:"string",format:"uuid"},type:{title:"Type",enum:["prompter_reply"],type:"string",default:"prompter_reply"},conversation:{title:"Conversation",type:"object",properties:{messages:{title:"Messages",type:"array",items:{title:"ConversationMessage",required:["text","is_assistant"],type:"object",properties:{id:{title:"Id",type:"string",format:"uuid"},frontend_message_id:{title:"Frontend Message Id",type:"string"},text:{title:"Text",type:"string"},is_assistant:{title:"Is Assistant",type:"boolean"}},description:"Represents a message in a conversation between the user and the assistant."},default:[]}},description:"Represents a conversation between the prompter and the assistant."}},description:"A task to prompt the user to submit a reply to the assistant."},{title:"AssistantReplyTask",required:["conversation"],type:"object",properties:{id:{title:"Id",type:"string",format:"uuid"},type:{title:"Type",enum:["assistant_reply"],type:"string",default:"assistant_reply"},conversation:{title:"Conversation",type:"object",properties:{messages:{title:"Messages",type:"array",items:{title:"ConversationMessage",required:["text","is_assistant"],type:"object",properties:{id:{title:"Id",type:"string",format:"uuid"},frontend_message_id:{title:"Frontend Message Id",type:"string"},text:{title:"Text",type:"string"},is_assistant:{title:"Is Assistant",type:"boolean"}},description:"Represents a message in a conversation between the user and the assistant."},default:[]}},description:"Represents a conversation between the prompter and the assistant."}},description:"A task to prompt the user to act as the assistant."},{title:"RankInitialPromptsTask",required:["prompts","prompt_messages"],type:"object",properties:{id:{title:"Id",type:"string",format:"uuid"},type:{title:"Type",enum:["rank_initial_prompts"],type:"string",default:"rank_initial_prompts"},prompts:{title:"Prompts",type:"array",items:{type:"string"}},prompt_messages:{title:"Prompt Messages",type:"array",items:{title:"ConversationMessage",required:["text","is_assistant"],type:"object",properties:{id:{title:"Id",type:"string",format:"uuid"},frontend_message_id:{title:"Frontend Message Id",type:"string"},text:{title:"Text",type:"string"},is_assistant:{title:"Is Assistant",type:"boolean"}},description:"Represents a message in a conversation between the user and the assistant."}}},description:"A task to rank a set of initial prompts."},{title:"RankConversationRepliesTask",required:["conversation","replies","reply_messages"],type:"object",properties:{id:{title:"Id",type:"string",format:"uuid"},type:{title:"Type",enum:["rank_conversation_replies"],type:"string",default:"rank_conversation_replies"},conversation:{title:"Conversation",type:"object",properties:{messages:{title:"Messages",type:"array",items:{title:"ConversationMessage",required:["text","is_assistant"],type:"object",properties:{id:{title:"Id",type:"string",format:"uuid"},frontend_message_id:{title:"Frontend Message Id",type:"string"},text:{title:"Text",type:"string"},is_assistant:{title:"Is Assistant",type:"boolean"}},description:"Represents a message in a conversation between the user and the assistant."},default:[]}},description:"Represents a conversation between the prompter and the assistant."},replies:{title:"Replies",type:"array",items:{type:"string"}},reply_messages:{title:"Reply Messages",type:"array",items:{title:"ConversationMessage",required:["text","is_assistant"],type:"object",properties:{id:{title:"Id",type:"string",format:"uuid"},frontend_message_id:{title:"Frontend Message Id",type:"string"},text:{title:"Text",type:"string"},is_assistant:{title:"Is Assistant",type:"boolean"}},description:"Represents a message in a conversation between the user and the assistant."}}},description:"A task to rank a set of replies to a conversation."},{title:"RankPrompterRepliesTask",required:["conversation","replies","reply_messages"],type:"object",properties:{id:{title:"Id",type:"string",format:"uuid"},type:{title:"Type",enum:["rank_prompter_replies"],type:"string",default:"rank_prompter_replies"},conversation:{title:"Conversation",type:"object",properties:{messages:{title:"Messages",type:"array",items:{title:"ConversationMessage",required:["text","is_assistant"],type:"object",properties:{id:{title:"Id",type:"string",format:"uuid"},frontend_message_id:{title:"Frontend Message Id",type:"string"},text:{title:"Text",type:"string"},is_assistant:{title:"Is Assistant",type:"boolean"}},description:"Represents a message in a conversation between the user and the assistant."},default:[]}},description:"Represents a conversation between the prompter and the assistant."},replies:{title:"Replies",type:"array",items:{type:"string"}},reply_messages:{title:"Reply Messages",type:"array",items:{title:"ConversationMessage",required:["text","is_assistant"],type:"object",properties:{id:{title:"Id",type:"string",format:"uuid"},frontend_message_id:{title:"Frontend Message Id",type:"string"},text:{title:"Text",type:"string"},is_assistant:{title:"Is Assistant",type:"boolean"}},description:"Represents a message in a conversation between the user and the assistant."}}},description:"A task to rank a set of prompter replies to a conversation."},{title:"RankAssistantRepliesTask",required:["conversation","replies","reply_messages"],type:"object",properties:{id:{title:"Id",type:"string",format:"uuid"},type:{title:"Type",enum:["rank_assistant_replies"],type:"string",default:"rank_assistant_replies"},conversation:{title:"Conversation",type:"object",properties:{messages:{title:"Messages",type:"array",items:{title:"ConversationMessage",required:["text","is_assistant"],type:"object",properties:{id:{title:"Id",type:"string",format:"uuid"},frontend_message_id:{title:"Frontend Message Id",type:"string"},text:{title:"Text",type:"string"},is_assistant:{title:"Is Assistant",type:"boolean"}},description:"Represents a message in a conversation between the user and the assistant."},default:[]}},description:"Represents a conversation between the prompter and the assistant."},replies:{title:"Replies",type:"array",items:{type:"string"}},reply_messages:{title:"Reply Messages",type:"array",items:{title:"ConversationMessage",required:["text","is_assistant"],type:"object",properties:{id:{title:"Id",type:"string",format:"uuid"},frontend_message_id:{title:"Frontend Message Id",type:"string"},text:{title:"Text",type:"string"},is_assistant:{title:"Is Assistant",type:"boolean"}},description:"Represents a message in a conversation between the user and the assistant."}}},description:"A task to rank a set of assistant replies to a conversation."},{title:"LabelInitialPromptTask",required:["message_id","prompt","valid_labels"],type:"object",properties:{id:{title:"Id",type:"string",format:"uuid"},type:{title:"Type",enum:["label_initial_prompt"],type:"string",default:"label_initial_prompt"},message_id:{title:"Message Id",type:"string",format:"uuid"},prompt:{title:"Prompt",type:"string"},valid_labels:{title:"Valid Labels",type:"array",items:{type:"string"}},mandatory_labels:{title:"Mandatory Labels",type:"array",items:{type:"string"}},mode:{title:"LabelTaskMode",enum:["simple","full"],type:"string",description:"Label task mode that allows frontends to select an appropriate UI."}},description:"A task to label an initial prompt."},{title:"LabelConversationReplyTask",required:["conversation","message_id","reply","valid_labels"],type:"object",properties:{id:{title:"Id",type:"string",format:"uuid"},type:{title:"Type",enum:["label_conversation_reply"],type:"string",default:"label_conversation_reply"},conversation:{title:"Conversation",type:"object",properties:{messages:{title:"Messages",type:"array",items:{title:"ConversationMessage",required:["text","is_assistant"],type:"object",properties:{id:{title:"Id",type:"string",format:"uuid"},frontend_message_id:{title:"Frontend Message Id",type:"string"},text:{title:"Text",type:"string"},is_assistant:{title:"Is Assistant",type:"boolean"}},description:"Represents a message in a conversation between the user and the assistant."},default:[]}},description:"Represents a conversation between the prompter and the assistant."},message_id:{title:"Message Id",type:"string",format:"uuid"},reply:{title:"Reply",type:"string"},valid_labels:{title:"Valid Labels",type:"array",items:{type:"string"}},mandatory_labels:{title:"Mandatory Labels",type:"array",items:{type:"string"}},mode:{title:"LabelTaskMode",enum:["simple","full"],type:"string",description:"Label task mode that allows frontends to select an appropriate UI."}},description:"A task to label a reply to a conversation."},{title:"LabelPrompterReplyTask",required:["conversation","message_id","reply","valid_labels"],type:"object",properties:{id:{title:"Id",type:"string",format:"uuid"},type:{title:"Type",enum:["label_prompter_reply"],type:"string",default:"label_prompter_reply"},conversation:{title:"Conversation",type:"object",properties:{messages:{title:"Messages",type:"array",items:{title:"ConversationMessage",required:["text","is_assistant"],type:"object",properties:{id:{title:"Id",type:"string",format:"uuid"},frontend_message_id:{title:"Frontend Message Id",type:"string"},text:{title:"Text",type:"string"},is_assistant:{title:"Is Assistant",type:"boolean"}},description:"Represents a message in a conversation between the user and the assistant."},default:[]}},description:"Represents a conversation between the prompter and the assistant."},message_id:{title:"Message Id",type:"string",format:"uuid"},reply:{title:"Reply",type:"string"},valid_labels:{title:"Valid Labels",type:"array",items:{type:"string"}},mandatory_labels:{title:"Mandatory Labels",type:"array",items:{type:"string"}},mode:{title:"LabelTaskMode",enum:["simple","full"],type:"string",description:"Label task mode that allows frontends to select an appropriate UI."}},description:"A task to label a prompter reply to a conversation."},{title:"LabelAssistantReplyTask",required:["conversation","message_id","reply","valid_labels"],type:"object",properties:{id:{title:"Id",type:"string",format:"uuid"},type:{title:"Type",enum:["label_assistant_reply"],type:"string",default:"label_assistant_reply"},conversation:{title:"Conversation",type:"object",properties:{messages:{title:"Messages",type:"array",items:{title:"ConversationMessage",required:["text","is_assistant"],type:"object",properties:{id:{title:"Id",type:"string",format:"uuid"},frontend_message_id:{title:"Frontend Message Id",type:"string"},text:{title:"Text",type:"string"},is_assistant:{title:"Is Assistant",type:"boolean"}},description:"Represents a message in a conversation between the user and the assistant."},default:[]}},description:"Represents a conversation between the prompter and the assistant."},message_id:{title:"Message Id",type:"string",format:"uuid"},reply:{title:"Reply",type:"string"},valid_labels:{title:"Valid Labels",type:"array",items:{type:"string"}},mandatory_labels:{title:"Mandatory Labels",type:"array",items:{type:"string"}},mode:{title:"LabelTaskMode",enum:["simple","full"],type:"string",description:"Label task mode that allows frontends to select an appropriate UI."}},description:"A task to label an assistant reply to a conversation."}]}}}},422:{description:"Validation Error",content:{"application/json":{schema:{title:"HTTPValidationError",type:"object",properties:{detail:{title:"Detail",type:"array",items:{title:"ValidationError",required:["loc","msg","type"],type:"object",properties:{loc:{title:"Location",type:"array",items:{anyOf:[{type:"string"},{type:"integer"}]}},msg:{title:"Message",type:"string"},type:{title:"Error Type",type:"string"}}}}}}}}}},security:[{APIKeyQuery:[]},{APIKeyHeader:[]}],method:"post",path:"/api/v1/tasks/",securitySchemes:{APIKeyQuery:{type:"apiKey",in:"query",name:"api_key"},APIKeyHeader:{type:"apiKey",in:"header",name:"X-API-Key"}},jsonRequestBodyExample:{type:"random",user:{id:"string",display_name:"string",auth_method:"discord"},collective:!1},info:{title:"open-assistant backend",version:"0.1.0"},postman:{name:"Request Task",description:{content:"Create new task.",type:"text/plain"},url:{path:["api","v1","tasks",""],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'{\n    "type": "random",\n    "user": {\n        "id": "<string>",\n        "display_name": "<string>",\n        "auth_method": "<string>"\n    },\n    "collective": false\n}'},auth:{type:"apikey",apikey:[{type:"any",value:"X-API-Key",key:"key"},{type:"any",value:!0,key:"value"},{type:"any",value:"header",key:"in"}]}}},source:"@site/docs/api/openapi.json",sourceDirName:".",permalink:"/Open-Assistant/api/request-task",next:{title:"Tasks Acknowledge",permalink:"/Open-Assistant/api/tasks-acknowledge"}},o=[],l={toc:o};function d(t){let{components:e,...s}=t;return(0,a.kt)("wrapper",(0,i.Z)({},l,s,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"request-task"},"Request Task"),(0,a.kt)("p",null,"Create new task."),(0,a.kt)("table",{style:{display:"table",width:"100%"}},(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",{style:{textAlign:"left"}},"Request Body ",(0,a.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,a.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"),(0,a.kt)("div",null)))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"type"),(0,a.kt)("span",{style:{opacity:"0.6"}}," TaskRequestType"),(0,a.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Possible values:")," ","[",(0,a.kt)("inlineCode",{parentName:"p"},"random"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"summarize_story"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"rate_summary"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"initial_prompt"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"prompter_reply"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"assistant_reply"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"rank_initial_prompts"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"rank_prompter_replies"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"rank_assistant_replies"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"label_initial_prompt"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"label_assistant_reply"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"label_prompter_reply"),"]")),(0,a.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,a.kt)("p",null,"An enumeration.")))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"user"),(0,a.kt)("span",{style:{opacity:"0.6"}}," object"),(0,a.kt)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"}},(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"id"),(0,a.kt)("span",{style:{opacity:"0.6"}}," Id"),(0,a.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,a.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"display_name"),(0,a.kt)("span",{style:{opacity:"0.6"}}," Display Name"),(0,a.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,a.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"auth_method"),(0,a.kt)("span",{style:{opacity:"0.6"}}," Auth Method"),(0,a.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,a.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"),(0,a.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Possible values:")," ","[",(0,a.kt)("inlineCode",{parentName:"p"},"discord"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"local"),"]")))))))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"collective"),(0,a.kt)("span",{style:{opacity:"0.6"}}," Collective"))))),(0,a.kt)("table",{style:{display:"table",width:"100%"}},(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",{style:{textAlign:"left"}},"Responses"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("div",{style:{display:"flex"}},(0,a.kt)("div",{style:{marginRight:"var(--ifm-table-cell-padding)"}},(0,a.kt)("code",null,"200")),(0,a.kt)("div",null,(0,a.kt)("p",null,"Successful Response"))),(0,a.kt)("div",null,(0,a.kt)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"}},(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",{style:{textAlign:"left"}},"Schema ",(0,a.kt)("div",null)))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("span",{style:{opacity:"0.6"}}," undefined")))))))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("div",{style:{display:"flex"}},(0,a.kt)("div",{style:{marginRight:"var(--ifm-table-cell-padding)"}},(0,a.kt)("code",null,"422")),(0,a.kt)("div",null,(0,a.kt)("p",null,"Validation Error"))),(0,a.kt)("div",null,(0,a.kt)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"}},(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",{style:{textAlign:"left"}},"Schema ",(0,a.kt)("div",null)))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"detail"),(0,a.kt)("span",{style:{opacity:"0.6"}}," object[]"),(0,a.kt)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"}},(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"loc"),(0,a.kt)("span",{style:{opacity:"0.6"}}," undefined[]"),(0,a.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,a.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"msg"),(0,a.kt)("span",{style:{opacity:"0.6"}}," Message"),(0,a.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,a.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"type"),(0,a.kt)("span",{style:{opacity:"0.6"}}," Error Type"),(0,a.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,a.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED")))))))))))))))}d.isMDXComponent=!0}}]);