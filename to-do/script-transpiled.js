"use strict";

$(function () {
        $("#task").hide();
        $(".add-task").click(function () {
                $("#task").show();
        });
        $("#task").change(function () {
                var label1 = $("#task").val();
                $("#task").val("");

                console.log(label1);

                var checkbox = document.createElement('input');
                checkbox.type = "checkbox";
                checkbox.id = label1;

                console.log(checkbox);

                var label = document.createElement('label');
                label.htmlFor = label1;
                label.appendChild(document.createTextNode(label1));

                console.log(label);

                var br = document.createElement('br');

                $(".task-to-do").append(checkbox);
                $(".task-to-do").append(label);
                $(".task-to-do").append(br);

                console.log($(".task-to-do"));

                $("#task").hide();
        });

        $('input[type="checkbox"]').live('change', function () {
                console.log('checking');
                if ($(this).is(":checked")) {
                        alert("Moving to task done");
                        var txt = $("<p></p>").text(this.id);
                        console.log(this.id);
                        $(this).remove();
                        $("label[for=" + this.id + "]").remove();
                        $(".task-done").append(txt);
                }
        });
});
