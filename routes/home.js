// tạo các method để xử lý các hoạt động CRUD

const express = require('express');
const router = express.Router();
const list = require('../models/list');



// đọc các todolist
router.get('/', (req, res) => {
    list.find((err, docs) => {
        if (err) throw err;
        res.render('home', {
            teams: docs
        })
    }).catch(err => {
        console.log(err);
    })
});


// tạo mới các todo
router.post('/add', (req, res, next) => {
    const {
        name,
        description,
        date,
        time

    } = req.body;
    console.log(name, description, date, time);
    const lists = new list({
        name,
        description,
        date,
        time
    });
    lists.save(err => {
        if (err) {
            console.log(err);
        } else {
            res.redirect('/');
        }
    });


});




// hiển thị các bản ghi sau khi update 
router.get('/edit/:id', (req, res, next) => {
    console.log(req.params.id);

    list.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true }, (err, docs) => {
        console.log(docs);

        console.log(docs.name);

        res.render('edit', { team: docs });
    })
});





// UPdate 1 bản ghi
router.post('/edit/:id', (req, res, next) => {

    list.findByIdAndUpdate({ _id: req.params.id }, req.body, (err) => {
        if (err) {
            console.log(err);
            next(err);
        } else {
            res.redirect('/');
        }
    })
});

// xóa 1 bản ghi

router.get('/:id', (req, res) => {
    list.findByIdAndDelete({ _id: req.params.id }, err => {
        if (err) {
            console.log(err);
        } else {
            res.redirect('/');
        }
    });
})

module.exports = router;