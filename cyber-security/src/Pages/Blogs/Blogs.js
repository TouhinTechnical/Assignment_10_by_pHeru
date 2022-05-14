import React from 'react';
import { Accordion } from 'react-bootstrap';
import blogImage from '../../images/faq-img.png';
import './Blogs.css';

const Blogs = () => {
    return (
        <div>
            <div className="blogs-section ptb-28 bg-PearlBush">
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <div className="blogs-img mt-5">
                                <img src={blogImage} alt="BlogImage" style={{width: '100%'}} />
                            </div>
                        </div>
                        <div className="col-6">
                            <h2 className='fw-bold ms-3'>Frequently Asked Questions</h2>
                            <h5 className='ms-3'>Just Find Your Answers Below</h5>
                            <Accordion defaultActiveKey="0" className='ms-3 mt-4'>
                                <Accordion.Item eventKey="0" className='mb-4 border rounded'>
                                    <Accordion.Header>Difference between authorization and authentication?</Accordion.Header>
                                    <Accordion.Body>
                                        Authentication : প্রমাণীকরণ হল এমন একটি প্রক্রিয়া যা ব্যবহারকারীদের সনাক্ত করে যারা সিস্টেম বা অ্যাপ্লিকেশনে অ্যাক্সেস প্রদানের জন্য চেক করেছে। ব্যবহারকারী বা ব্যক্তি প্রমাণীকরণ প্রক্রিয়া দ্বারা যাচাই করা হয়. এটি অনুমোদন প্রক্রিয়ার আগে করা হয়েছে। প্রমাণীকরণের জন্য সাধারণত ব্যবহারকারীর লগইন বিশদ প্রয়োজন। এটি নির্ধারণ করে যে ব্যক্তিটি ব্যবহারকারী কিনা। <br />
                                        Authorization : অনুমোদন হল এমন একটি প্রক্রিয়া যেখানে কোনও ব্যক্তি বা ব্যবহারকারীর কর্তৃপক্ষকে সংস্থান বা অ্যাপ্লিকেশন অ্যাক্সেস করার জন্য পরীক্ষা করা হয়। ব্যবহারকারী বা ব্যক্তি অনুমোদন প্রক্রিয়া দ্বারা যাচাই করা হয়. এটি ব্যবহারকারীর বিশেষাধিকার বা নিরাপত্তা স্তর প্রয়োজন. এটাও নির্ধারণ করে যে ব্যবহারকারীর কি অনুমতি আছে।
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1" className='mb-4 border rounded'>
                                    <Accordion.Header>Why are you using firebase? <br /> What other options do you have to implement authentication?</Accordion.Header>
                                    <Accordion.Body>
                                        Firebase হল একটি Google-সমর্থিত অ্যাপ্লিকেশন ডেভেলপমেন্ট সফ্টওয়্যার বা অ্যাপ্লিকেশন যা ডেভেলপারদের ওয়েব অ্যাপ্লিকেশন, iOS এবং Android অ্যাপ তৈরি করতে সক্ষম করে। ফায়ারবেস অ্যানালিটিক্স ট্র্যাকিং, অ্যাপ ক্র্যাশ রিপোর্টিং এবং ফিক্সিং এবং মার্কেটিং এবং প্রোডাক্ট এক্সপেরিমেন্ট তৈরি করার জন্য টুল সরবরাহ করে। তাই আমি প্রমাণীকরণের জন্য ফায়ারবেস ব্যবহার করেছি। আমি পাসওয়ার্ড প্রমাণীকরণ, লগইন এবং নিবন্ধন বাস্তবায়ন করেছি।
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="2" className="border rounded">
                                    <Accordion.Header>What other services does firebase provide other than authentication ?</Accordion.Header>
                                    <Accordion.Body>
                                        Firebase প্রমাণীকরণ ব্যাকএন্ড পরিষেবা, সহজে ব্যবহারযোগ্য SDK, এবং আপনার অ্যাপে ব্যবহারকারীদের প্রমাণীকরণের জন্য তৈরি UI লাইব্রেরি প্রদান করে। এটি পাসওয়ার্ড, ফোন নম্বর, Google, Facebook এবং Twitter এর মতো জনপ্রিয় ফেডারেটেড পরিচয় প্রদানকারী এবং আরও অনেক কিছু ব্যবহার করে প্রমাণীকরণ সমর্থন করে।
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;