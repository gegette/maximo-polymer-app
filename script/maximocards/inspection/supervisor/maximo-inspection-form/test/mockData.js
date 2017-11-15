/*
 * Licensed Materials - Property of IBM
 *
 * 5724-U18
 *
 * (C) Copyright IBM Corp. 2017 All Rights Reserved
 *
 * US Government Users Restricted Rights - Use, duplication or
 * disclosure restricted by GSA ADP Schedule Contract with
 * IBM Corp.
 */

var mockDelEvent = document.createEvent('Event');
mockDelEvent.detail = {'x':1179,'y':296,'sourceEvent':{'target':document.createElement('tr'),'isTrusted':true,'__polymerGesturesHandled':{'tap':true}}};
//mockDelEvent.sourceEvent = {};
//mockDelEvent.sourceEvent.target = document.createElement('tr');
mockDelEvent.model={'formQuestion':{'hasld_localized':'N','localref':'http://localhost:7001/maximo/oslc/os/mxapiinspform/_MTAwMS9FQUdMRU5BLzE-/inspquestion/1-2','langcode':'EN','inspquestionnum':'1002','_rowstamp':'1145119','inspquestionid_localized':'2','_id':'1001-1002-EAGLENA-1','sequence':0,'description':'Does anyone really care?','sequence_localized':'0.00','inspquestionid':2,'inspfield_collectionref':'http://localhost:7001/maximo/oslc/os/mxapiinspform/_MTAwMS9FQUdMRU5BLzE-/inspquestion/1-2/inspfield','required':false,'href':'http://childkey#SU5TUEVDVElPTkZPUk0vSU5TUFFVRVNUSU9OLzEwMDEvMTAwMi9FQUdMRU5BLzE-','required_localized':'N','hasld':false}};
var mockEditEvent = document.createEvent('Event');
mockEditEvent.detail = {'x':1320,'y':266,'sourceEvent':{'isTrusted':true,'__polymerGesturesHandled':{'tap':true}}};
mockEditEvent.model={'formQuestion':{'hasld_localized':'N','localref':'http://localhost:7001/maximo/oslc/os/mxapiinspform/_MTAwMS9FQUdMRU5BLzE-/inspquestion/0-1','langcode':'EN','inspquestionnum':'1001','_rowstamp':'1145109','inspquestionid_localized':'1','_id':'1001-1001-EAGLENA-1','sequence':0,'description':'Does anyone really know what time it is?','sequence_localized':'0.00','inspquestionid':1,'inspfield_collectionref':'http://localhost:7001/maximo/oslc/os/mxapiinspform/_MTAwMS9FQUdMRU5BLzE-/inspquestion/0-1/inspfield','required':false,'href':'http://childkey#SU5TUEVDVElPTkZPUk0vSU5TUFFVRVNUSU9OLzEwMDEvMTAwMS9FQUdMRU5BLzE-','required_localized':'N','hasld':false}};
var mockDupEvent = document.createEvent('Event');
mockDupEvent.model={'formQuestion':{'hasld_localized':'N','localref':'http://localhost:7001/maximo/oslc/os/mxapiinspform/_MTAwMS9FQUdMRU5BLzE-/inspquestion/0-1','langcode':'EN','inspquestionnum':'1001','_rowstamp':'1145109','inspquestionid_localized':'1','_id':'1001-1001-EAGLENA-1','sequence':0,'description':'Does anyone really know what time it is?','sequence_localized':'0.00','inspquestionid':1,'inspfield_collectionref':'http://localhost:7001/maximo/oslc/os/mxapiinspform/_MTAwMS9FQUdMRU5BLzE-/inspquestion/0-1/inspfield','required':false,'href':'http://childkey#SU5TUEVDVElPTkZPUk0vSU5TUFFVRVNUSU9OLzEwMDEvMTAwMS9FQUdMRU5BLzE-','required_localized':'N','hasld':false}};

var testTableData = [{'groupseq_localized':'1.00','groupseq':1,'hasld_localized':'Y','description_longdescription':'<p>Enter some text here, to be sure</p>','localref':'http://localhost:7001/maximo/oslc/os/mxapiinspform/_MTAwMS9FQUdMRU5BLzE-/inspquestion/0-7','langcode':'EN','inspquestionnum':'1007','inspquestionid_localized':'7','_rowstamp':'1992970','_id':'1001-1007-EAGLENA-1','sequence':0,'description':'Group one','groupid_localized':'1','sequence_localized':'0','inspquestionid':7,'groupid':1,'inspfield_collectionref':'http://localhost:7001/maximo/oslc/os/mxapiinspform/_MTAwMS9FQUdMRU5BLzE-/inspquestion/0-7/inspfield','required':false,'href':'http://childkey#SU5TUEVDVElPTkZPUk0vSU5TUFFVRVNUSU9OLzEwMDEvMTAwNy9FQUdMRU5BLzE-','required_localized':'N','hasld':true},{'groupseq_localized':'1.10','groupseq':1.1,'hasld_localized':'N','localref':'http://localhost:7001/maximo/oslc/os/mxapiinspform/_MTAwMS9FQUdMRU5BLzE-/inspquestion/1-1','langcode':'EN','inspquestionnum':'1001','inspquestionid_localized':'1','_rowstamp':'1986161','_id':'1001-1001-EAGLENA-1','sequence':1,'description':'Should this be grouped?','groupid_localized':'1','sequence_localized':'1','inspquestionid':1,'groupid':1,'inspfield_collectionref':'http://localhost:7001/maximo/oslc/os/mxapiinspform/_MTAwMS9FQUdMRU5BLzE-/inspquestion/1-1/inspfield','required':false,'href':'http://childkey#SU5TUEVDVElPTkZPUk0vSU5TUFFVRVNUSU9OLzEwMDEvMTAwMS9FQUdMRU5BLzE-','required_localized':'N','hasld':false},{'groupseq_localized':'1.20','groupseq':1.2,'hasld_localized':'N','localref':'http://localhost:7001/maximo/oslc/os/mxapiinspform/_MTAwMS9FQUdMRU5BLzE-/inspquestion/2-4','langcode':'EN','inspquestionnum':'1004','inspquestionid_localized':'4','_rowstamp':'1986158','_id':'1001-1004-EAGLENA-1','sequence':2,'description':'Is this grouped as well?','groupid_localized':'1','sequence_localized':'2','inspquestionid':4,'groupid':1,'inspfield_collectionref':'http://localhost:7001/maximo/oslc/os/mxapiinspform/_MTAwMS9FQUdMRU5BLzE-/inspquestion/2-4/inspfield','required':false,'href':'http://childkey#SU5TUEVDVElPTkZPUk0vSU5TUFFVRVNUSU9OLzEwMDEvMTAwNC9FQUdMRU5BLzE-','required_localized':'N','hasld':false},{'groupseq_localized':'2.00','groupseq':2,'hasld_localized':'N','localref':'http://localhost:7001/maximo/oslc/os/mxapiinspform/_MTAwMS9FQUdMRU5BLzE-/inspquestion/3-2','langcode':'EN','inspquestionnum':'1002','_rowstamp':'1986073','inspquestionid_localized':'2','_id':'1001-1002-EAGLENA-1','sequence':2,'description':'Does anyone really know what time it is?','sequence_localized':'2','inspquestionid':2,'inspfield_collectionref':'http://localhost:7001/maximo/oslc/os/mxapiinspform/_MTAwMS9FQUdMRU5BLzE-/inspquestion/3-2/inspfield','required':false,'href':'http://childkey#SU5TUEVDVElPTkZPUk0vSU5TUFFVRVNUSU9OLzEwMDEvMTAwMi9FQUdMRU5BLzE-','required_localized':'N','hasld':false},{'groupseq_localized':'3.00','groupseq':3,'hasld_localized':'N','localref':'http://localhost:7001/maximo/oslc/os/mxapiinspform/_MTAwMS9FQUdMRU5BLzE-/inspquestion/4-3','langcode':'EN','inspquestionnum':'1003','_rowstamp':'1986080','inspquestionid_localized':'3','_id':'1001-1003-EAGLENA-1','sequence':3,'description':'Does anyone really care?','sequence_localized':'3','inspquestionid':3,'inspfield_collectionref':'http://localhost:7001/maximo/oslc/os/mxapiinspform/_MTAwMS9FQUdMRU5BLzE-/inspquestion/4-3/inspfield','required':false,'href':'http://childkey#SU5TUEVDVElPTkZPUk0vSU5TUFFVRVNUSU9OLzEwMDEvMTAwMy9FQUdMRU5BLzE-','required_localized':'N','hasld':false},{'groupseq_localized':'4.00','groupseq':4,'hasld_localized':'N','localref':'http://localhost:7001/maximo/oslc/os/mxapiinspform/_MTAwMS9FQUdMRU5BLzE-/inspquestion/5-21','langcode':'EN','inspquestionnum':'1008','inspquestionid_localized':'21','_rowstamp':'1993185','_id':'1001-1008-EAGLENA-1','sequence':0,'description':'Enter Group Description','groupid_localized':'4','sequence_localized':'0','inspquestionid':21,'groupid':4,'inspfield_collectionref':'http://localhost:7001/maximo/oslc/os/mxapiinspform/_MTAwMS9FQUdMRU5BLzE-/inspquestion/5-21/inspfield','required':false,'href':'http://childkey#SU5TUEVDVElPTkZPUk0vSU5TUFFVRVNUSU9OLzEwMDEvMTAwOC9FQUdMRU5BLzE-','required_localized':'N','hasld':false},{'groupseq_localized':'4.10','groupseq':4.1,'hasld_localized':'N','localref':'http://localhost:7001/maximo/oslc/os/mxapiinspform/_MTAwMS9FQUdMRU5BLzE-/inspquestion/6-5','langcode':'EN','inspquestionnum':'1005','inspquestionid_localized':'5','_rowstamp':'1992946','_id':'1001-1005-EAGLENA-1','sequence':1,'description':'Is Chicago still together?','groupid_localized':'4','sequence_localized':'1','inspquestionid':5,'groupid':4,'inspfield_collectionref':'http://localhost:7001/maximo/oslc/os/mxapiinspform/_MTAwMS9FQUdMRU5BLzE-/inspquestion/6-5/inspfield','required':false,'href':'http://childkey#SU5TUEVDVElPTkZPUk0vSU5TUFFVRVNUSU9OLzEwMDEvMTAwNS9FQUdMRU5BLzE-','required_localized':'N','hasld':false},{'groupseq_localized':'5.00','groupseq':5,'hasld_localized':'N','localref':'http://localhost:7001/maximo/oslc/os/mxapiinspform/_MTAwMS9FQUdMRU5BLzE-/inspquestion/7-6','langcode':'EN','inspquestionnum':'1006','_rowstamp':'1986160','inspquestionid_localized':'6','_id':'1001-1006-EAGLENA-1','sequence':5,'description':'Is this the last question?','sequence_localized':'5','inspquestionid':6,'inspfield_collectionref':'http://localhost:7001/maximo/oslc/os/mxapiinspform/_MTAwMS9FQUdMRU5BLzE-/inspquestion/7-6/inspfield','required':false,'href':'http://childkey#SU5TUEVDVElPTkZPUk0vSU5TUFFVRVNUSU9OLzEwMDEvMTAwNi9FQUdMRU5BLzE-','required_localized':'N','hasld':false,'checked':true}];