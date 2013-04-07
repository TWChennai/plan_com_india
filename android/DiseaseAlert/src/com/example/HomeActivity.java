package com.example;

import android.app.Activity;
import android.content.Intent;
import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.widget.DatePicker;
import android.widget.EditText;
import android.widget.TextView;
import android.widget.Toast;
import org.apache.http.HttpResponse;
import org.apache.http.NameValuePair;
import org.apache.http.client.HttpClient;
import org.apache.http.client.entity.UrlEncodedFormEntity;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.impl.client.DefaultHttpClient;
import org.apache.http.message.BasicNameValuePair;

import java.io.UnsupportedEncodingException;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

public class HomeActivity extends Activity {
    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.main);
    }

    public void reportDisease(View view) throws Exception {
        postData();
    }

    public void postData() throws Exception {
        HttpClient httpclient = new DefaultHttpClient();
        HttpPost httppost = new HttpPost("http://disease-alert.herokuapp.com/disease");
        List<NameValuePair> nameValuePairs = new ArrayList<NameValuePair>(2);

        EditText locationView = (EditText) findViewById(R.id.location);
        String address = locationView.getText().toString();

        EditText affectCountView = (EditText) findViewById(R.id.patient_count);
        String affectCount = affectCountView.getText().toString();

        EditText diseaseNameView = (EditText) findViewById(R.id.disease_name);
        String diseaseName = diseaseNameView.getText().toString();

        DatePicker datePicker = (DatePicker) findViewById(R.id.disease_date);
        Log.v("DatePicker", datePicker.getYear() + "");
        Date occuranceDate = new Date(datePicker.getYear(), datePicker.getMonth(), datePicker.getDayOfMonth());
        String timestamp = (occuranceDate.getTime() / 60000) + "";
        Log.v("DatePicker", timestamp);

        nameValuePairs.add(new BasicNameValuePair("address", address));
        nameValuePairs.add(new BasicNameValuePair("affect_count", affectCount));
        nameValuePairs.add(new BasicNameValuePair("name", diseaseName));
        nameValuePairs.add(new BasicNameValuePair("occurence_date", "" + datePicker.getYear() + "/" + (datePicker.getMonth()+1) + "/" + (datePicker.getDayOfMonth()+1)));

        httppost.setEntity(new UrlEncodedFormEntity(nameValuePairs));
        HttpResponse response = httpclient.execute(httppost);
        Toast.makeText(this, "Disease Reported", Toast.LENGTH_LONG).show();
    }
}
